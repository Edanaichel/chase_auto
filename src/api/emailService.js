import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_5c2mtnk';
const EMAILJS_TEMPLATE_ID = 'template_k90v73w';
const EMAILJS_PUBLIC_KEY = 'vGSU8pJEdE3sKKnRl';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

/**
 * Send contact form email using EmailJS
 * @param {Object} formData - The form data containing contact information
 * @param {string} formData.name - Customer name
 * @param {string} formData.email - Customer email
 * @param {string} formData.phone - Customer phone number
 * @param {string} formData.vehicle - Vehicle make and model
 * @param {string} formData.inquiry_type - Type of service inquiry
 * @param {string} formData.message - Customer message
 * @returns {Promise<Object>} - Response object with success status
 */
export const sendContactEmail = async (formData) => {
  try {
    // Prepare template parameters for EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      vehicle: formData.vehicle || 'Not specified',
      inquiry_type: formData.inquiry_type,
      message: formData.message,
      to_email: 'chaseautonh@gmail.com', // Your business email
      to_name: 'Chase Auto Body',
      reply_to: formData.email,
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', response);
    
    return {
      data: {
        success: true,
        message: 'Email sent successfully',
        status: response.status,
        text: response.text
      }
    };

  } catch (error) {
    console.error('Error sending email:', error);
    
    return {
      data: {
        success: false,
        error: error.message || 'Failed to send email',
        status: error.status || 500
      }
    };
  }
};

/**
 * Test EmailJS configuration
 * @returns {Promise<boolean>} - Whether EmailJS is properly configured
 */
export const testEmailConfiguration = async () => {
  try {
    // Test with minimal parameters
    const testParams = {
      from_name: 'Test User',
      from_email: 'test@example.com',
      message: 'This is a test message',
      to_email: 'chaseautonh@gmail.com',
      to_name: 'Chase Auto Body'
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      testParams
    );

    return true;
  } catch (error) {
    console.error('EmailJS configuration test failed:', error);
    return false;
  }
};
