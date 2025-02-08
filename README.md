# 🤖 Telegram Bot Handler - Telegraf.js Framework 

**A High-Performance Telegram Bot Framework**  
✨ Modern Architecture | 🚀 Optimized Performance | 🧩 Modular Design  

![License](https://img.shields.io/badge/License-BSD--3--Clause-blue)
![Telegraf Version](https://img.shields.io/badge/Telegraf-4.16.3-green)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-orange)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.4-blue)

## 🌟 Key Features
- 🛡️ Advanced Anti-Crash System
- 💾 Multi-Database Support (JSON/MySQL/MongoDB)
- ⚡ Modern Command Handler with Cooldown
- 📝 Colorful Console Logging
- 🔄 Native TypeScript Support
- 🤖 Full Telegram Bot API Coverage

## 📦 Core Dependencies

| Package      | Version | Purpose                |
| ------------ | ------- | ---------------------- |
| `telegraf`   | 4.16.3  | Telegram Bot Framework |
| `quick.db`   | 9.1.7   | Database Management    |
| `dotenv`     | 16.4.7  | Environment Variables  |
| `colors`     | 1.4.0   | Console Coloring       |
| `typescript` | 5.5.4   | TypeScript Compiler    |

## 🚀 Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure environment**:
   - Copy `example.env` to `.env`
   ```env
   token="YOUR_TELEGRAM_BOT_TOKEN"
   database_type="json"
   ```

3. **Build & Run**:
   ```bash
   npm start
   ```
   
   Or you can use this:
   ```bash
   npm run dev
   ```

   Then:
   ```bash
   node .
   ```

## ⌨️ Creating Commands

1. Create new file in `src/commands/` (e.g.: `ping.ts`)
2. Use this template:

```typescript
import CommandType from "../types/command";

const command: CommandType = {
  data: {
    name: "ping",
    description: "Check bot latency"
  },
  category: "misc",
  cooldown: 3,
  run: async (client, ctx) => {
    await ctx.reply("🏓 Pong!");
  }
};

export default command;
```

## 🎭 Creating Events

1. Create new file in `src/events/` (e.g.: `messages.ts`)
2. Use this template:

```typescript
import { NarrowedContext } from "telegraf";
import { Message, Update } from "telegraf/typings/core/types/typegram";
import { MyContext } from "../types/MessageContext";

const event: EventType = {
  name: "message",
  run: async (client, message: NarrowedContext<MyContext, Update.MessageUpdate<Message>>) => {
    console.log(`New message from @${ctx.from?.username}`);
  }
};

export default event;
```

## 📂 Project Structure
```
telegram-bot-handler/
├── dist/            # Compiled JS
├── src/
│   ├── commands/    # Command handlers
│   ├── handlers/    # Event handlers
│   ├── classes/     # Core classes
│   ├── functions/   # Functions
│   ├── utils/       # Utilities
│   └── types/       # TypeScript types
├── .env             # Environment variables
├── config.ts        # Main configuration
└── package.json     # Dependencies
```

## ⚙️ Configuration Options
Create a `.env` file in the root directory. **Make sure to provide values for at least `token` and `database_type`.**  
Below is an example configuration:

```ini
# Bot token (required)
token="YOUR_TELEGRAM_BOT_TOKEN"

# Database type (required): options are "mysql" | "sql" | "mongodb" | "json"
database_type="json"

# (Optional) If using MongoDB:
database_mongoURL="your-mongo-url"

# (Optional) If using MySQL:
database_msql_host="your-mysql-host"
database_msql_user="your-mysql-user"
database_msql_password="your-mysql-password"
database_msql_database="your-mysql-database"

# Support server invite link (optional)
support_url="https://discord.gg/yourInvite"

# Source owners (optional, comma-separated list of owner IDs)
owners='["123456789", "987654321"]'

# Anti crash controller (optional)
anti_crash="true"

# Send console errors to Discord (optional)
logger="true"
```

## 📜 License
This project is licensed under the [BSD 3-Clause License](./license).

```
Copyright (c) 2024 Sobhan-SRZA & Persian Caesar
All rights reserved.
```

## 👥 Maintainers
- [Sobhan-SRZA](https://github.com/Sobhan-SRZA) 🧑💻
- [Persian Caesar](https://github.com/Persian-Caesar) 👑

🌟 Contributions are welcome! Please open an issue or PR for suggestions.

---

**Need Help?**  
Join our support server: [Persian Caesar Discord](https://dsc.gg/persian-caesar)

This version includes:
1. Clear visual hierarchy with emojis
2. Version badges for key components
3. Step-by-step setup guide
4. Code examples for commands/events
5. Configuration reference
6. Project structure visualization
7. License and contribution guidelines

---

## Contact

<div align="center">
  <a href="http://sobhan.epizy.com" target="_blank">
  <img align="left" src="https://github.com/user-attachments/assets/69b35053-17b1-48c6-a35b-4d3881a4dd2c" width=50%>
  </a>
  <a href="https://t.me/d_opa_mine" target="_blank">
  <img alt="Telegram"
    src="https://img.shields.io/static/v1?message=Telegram&logo=telegram&label=&color=229ED9&logoColor=white&labelColor=&style=flat"
    height="30" />
  </a>
  <a href="https://www.instagram.com/mr.sinre?igsh=cWk1aHdhaGRnOGg%3D&utm_source=qr" target="_blank">
  <img alt="Instagram"
    src="https://img.shields.io/static/v1?message=Instagram&logo=instagram&label=&color=C13584&logoColor=white&labelColor=&style=flat"
    height="30" />
  </a>
  <a href="https://www.twitch.tv/sobhan_srza" target="_blank">
  <img alt="Twitch"
    src="https://img.shields.io/static/v1?message=Twitch&logo=twitch&label=&color=6441A4&logoColor=white&labelColor=&style=flat"
    height="30" />
  </a>
  <a href="https://www.youtube.com/@mr_sinre?app=desktop&sub_confirmation=1" target="_blank">
  <img alt="YouTube"
    src="https://img.shields.io/static/v1?message=YouTube&logo=youtube&label=&color=FF0000&logoColor=white&labelColor=&style=flat"
    height="30" />
  </a>
  <a href="https://github.com/Sobhan-SRZA" target="_blank">
  <img alt="Github"
    src="https://img.shields.io/static/v1?message=Github&logo=github&label=&color=000000&logoColor=white&labelColor=&style=flat"
    height="30" />
  </a>
  </p>
  <p align="left">
  <a href="https://discord.gg/xh2S2h67UW" target="_blank">
    <img src="https://discord.com/api/guilds/1054814674979409940/widget.png?style=banner2" alt="pc-development.png">
  </a>
  </p>
  <p align="right">
  <a href="https://discord.gg/54zDNTAymF" target="_blank">
    <img src="https://discord.com/api/guilds/1181764925874507836/widget.png?style=banner2" alt="pc-club.png">
  </a>
  </p>
  <div align="center">
  <a href="https://discord.com/users/865630940361785345" target="_blank">
    <img alt="My Discord Account" src="https://discord.c99.nl/widget/theme-1/865630940361785345.png" />
  </a>
  </div>
</div>