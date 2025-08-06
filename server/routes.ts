import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Create nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER || 'your-email@gmail.com',
      pass: process.env.EMAIL_PASS || 'your-app-password'
    }
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Store message in storage
      const message = await storage.createContactMessage(validatedData);

      // Send email using Nodemailer
      const mailOptions = {
        from: process.env.EMAIL_USER || 'your-email@gmail.com',
        to: 'ammaramjad0324@gmail.com',
        subject: validatedData.subject || 'New Contact Form Message',
        html: `
          <h3>New ${validatedData.isFromChat === 'true' ? 'Chat' : 'Contact Form'} Message</h3>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          ${validatedData.subject ? `<p><strong>Subject:</strong> ${validatedData.subject}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><small>Sent from: M Ammar Amjad Portfolio Website</small></p>
        `
      };

      await transporter.sendMail(mailOptions);

      res.json({ 
        success: true, 
        message: "Message sent successfully!",
        id: message.id 
      });
    } catch (error) {
      console.error('Contact form error:', error);
      
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message. Please try again later." 
        });
      }
    }
  });

  // Download resume endpoint
  app.get("/api/download-resume", async (req, res) => {
    try {
      // Google Drive direct download URL (requires public access)
      const driveUrl = 'https://drive.google.com/uc?export=download&id=188e8yWVAswVBUFrbBQnYinhwhw1KHkvm';
      
      // Check if the file is publicly accessible
      const response = await fetch(driveUrl, { method: 'HEAD' });
      
      if (response.ok) {
        // File is accessible, redirect to download
        res.redirect(driveUrl);
      } else {
        // File needs to be made public
        res.json({ 
          success: false, 
          message: "Please make your Google Drive resume publicly accessible: Go to your file → Share → Change to 'Anyone with the link' → Copy link. Then the download will work automatically." 
        });
      }
    } catch (error) {
      console.error('Resume download error:', error);
      res.status(500).json({ 
        success: false, 
        message: "Resume download temporarily unavailable. Please contact ammaramjad0324@gmail.com for the resume file." 
      });
    }
  });

  // Get contact messages (optional admin endpoint)
  app.get("/api/contact-messages", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json({ success: true, messages });
    } catch (error) {
      console.error('Get messages error:', error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve messages" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
