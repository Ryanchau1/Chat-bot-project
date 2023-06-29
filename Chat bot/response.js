const responseObj = {
    Hello: "Welcome!",
    greeting: "Hello! How can I assist you today?",
    help: "Sure, I'm here to help! Please let me know how I can assist you.",
    orderStatus: "To check your order status, please provide your order number.",
    refund: "For refund requests, kindly fill out the refund form on our website.",
    shipping: "Our standard shipping time is 3-5 business days.",
    contact: "You can reach our customer support team at support@example.com or call us at 1-800-123-4567.",
    goodbye: "Thank you for contacting us. Have a great day!",
    fallback: "I'm sorry, I didn't understand. Could you please rephrase your question?",
  };
  
  function processUserInput(userInput) {
    const normalizedInput = userInput.trim().toLowerCase();
  
    if (normalizedInput.includes("order") && normalizedInput.includes("status")) {
      return responseObj.orderStatus;
    } else if (normalizedInput.includes("refund")) {
      return responseObj.refund;
    } else if (normalizedInput.includes("shipping")) {
      return responseObj.shipping;
    } else if (normalizedInput.includes("contact")) {
      return responseObj.contact;
    } else if (normalizedInput.includes("bye") || normalizedInput.includes("goodbye")) {
      return responseObj.goodbye;
    } else if (normalizedInput.includes("help")) {
      return responseObj.help;
    } else {
      return responseObj.fallback;
    }
  }
  
