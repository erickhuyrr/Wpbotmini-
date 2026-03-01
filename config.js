/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['9779767966426','9'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['ErickBot', 'Professor'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VUyZKjOBD9F13L0WYxi4moiAa84X0Fm4k+yCBA7JYEmOrwv3dQy1QfZnpqblIq4+XTy5f5E+QFpmiBWqD9BCXBNWSoO7K2READRhUEiIAe8CGDQAOqFR2h6/nHQq4FqYzGLCnHXhln8aBSB/NzNreXx6MUOln4DB49UFbXFHt/ALSShXFHjpHWq5fVtFmExnymRLG9vtaj4r5br6RNI0wvVaInz+DRIUJMcB6OywhliMB0gdotxORr9JOZgeXtip8fLTfIbploue7S64ejkrKKZ6Nsfcuv/KVcC6uv0ed2V7uO6NJqOH8jqXoWc1M0nt705dG8e55ZN5R50UFRkssbfYrDHPmWj3KGWftl3QVjNhH8GDfRIL3E/X0jS5H1Il7vcMbXwck47c76+jTYZGfra8Qn7m0UH7yzjb29Z7DBZUCF4Vk9o9F5nQV7pRoLHLc4SYm4+p34lnx4Jfk/uguTAU7c5aIRE9mlxWY1d5Qpt6szeSdx1XyzO9jryzk95wL9Gv2Q2cdR7LYrS6k4bwYXWXxZ6Blxh3XgCqmb6KbkqWwltMknfcgq8ieW1E7TS4tGcKgc9XExzZrT5kLHcmbsg0SHwnAQbPJ+5UfCzr1hleRmsHnyi03tMHTAie+0IsfnTlHGJ7KUzHUlJNdw9/z6owS1lg80/tEDBIWYMgIZLvIuJghyD0C/PiCPIPYqL2g4o9TPzlDKvUVL68mYq9d5Ep9Eiy/T68ImIoSb9eC+j5Nn0AMlKTxEKfJnmLKCtCtEKQwRBdpfP3ogR3f21riunMj3QIAJZae8KtMC+h9d/XiEnldUOTu0uWd2B0SAxn2GEWM4D2mnY5VD4kW4RmYEGQVaAFOK/v4hIsh/j/VACinbkqKcQRoBDWydRDJAD5Ci6tCsPCj+0BhTD63RLjQ7Id9pdNk+YhCntEvY9L2oUI3x8mkdq9x0qo9D3Qx18En7o/9v+ibuLpkfdrORORfmbZzoatVX1EPsDoPMHI9eFrVFjBvv8M7p+R9AgAYgn6KUcbZoGeF86sUnktSroKiR7Cmx7zEdygeHskUu84nFVg3pK0ZzrSf3l6XhxZyaeVPJSuTYzvxpykaZCc290Tx31XxUYw/9XozZd3843gbn/VWd3O1mtnrZsN3ZqVI6qF6MeuQQV35CnKlmUg1r3BbOzShOzdoxdjwLDk7MLWKxXF4meCQ70+UtGbph8+bM7HUksA80MFSUoSoovMKpgqDx3+m3pmssLMtvOWKgB9LXNF6QVUmQhorIDSVR1PjvXfxjyNL35YZf7dchd9cAo9ddkcOu3n9XetOgsyT36P2G8b59/sUohjs9zc1TYjQN9rFXSPp2WT/1x4UQnKUw0tWWtIsGMpvZKXg8fvRAmUIWFCQDGsBlVOQIvHlV/xyCI84QZTArgcYriiAOuKEoPH4BSX336ToHAAA=',
    newsletterJid: '120363422821057476@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
