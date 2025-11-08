# Using the MMC Forge Electron Template

This guide explains how to use this template to create new Electron applications.

## 🚀 Quick Start

### Method 1: Use GitHub Template (Recommended)

1. **Create from Template**
   - Go to [github.com/mmcforge/electron-template](https://github.com/mmcforge/electron-template)
   - Click the green "Use this template" button
   - Choose "Create a new repository"
   - Name your repository and set visibility
   - Click "Create repository"

2. **Clone Your New Repository**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

3. **Run Setup Script**
   ```bash
   node setup-template.js
   ```
   This interactive script will:
   - Update package.json with your project details
   - Configure app titles and branding
   - Update electron-builder configuration
   - Set up your project for development

4. **Install Dependencies**
   ```bash
   # Choose your preferred package manager
   npm install
   # or
   pnpm install
   # or
   yarn install
   # or
   bun install
   ```

5. **Start Development**
   ```bash
   npm run dev
   ```

6. **Clean Up**
   ```bash
   rm setup-template.js  # Delete the setup script
   ```

### Method 2: Manual Clone

If you prefer manual setup:

```bash
# Clone the template
git clone https://github.com/mmcforge/electron-template.git your-project-name
cd your-project-name

# Remove git history and start fresh
rm -rf .git
git init
git add .
git commit -m "Initial commit from MMC Forge Electron Template"

# Manual configuration (see Manual Configuration section below)
```

## ⚙️ Manual Configuration

If you skip the setup script, manually update these files:

### 1. Update `package.json`
```json
{
  "name": "your-app-name",
  "version": "1.0.0",
  "description": "Your app description",
  "author": {
    "name": "Your Name",
    "url": "https://github.com/yourusername"
  }
}
```

### 2. Update `electron-builder.yml`
```yaml
appId: com.yourcompany.yourapp
productName: Your App Name
win:
  executableName: Your-App-Name
linux:
  maintainer: Your Name <your.email@example.com>
```

### 3. Update App Titles
- **lib/main/app.ts**: Change `title: 'Your App Name'`
- **app/components/welcome/contents/EraContent.tsx**: Update welcome text
- **app/components/window/menus.ts**: Update Credits menu

## 🏗️ Project Structure

```
your-project/
├── app/                    # Frontend (React)
│   ├── components/         # React components
│   ├── hooks/             # Custom hooks
│   ├── styles/            # Stylesheets
│   └── app.tsx            # Main app component
├── lib/
│   ├── conveyor/          # IPC system
│   │   ├── api/           # IPC API definitions
│   │   ├── handlers/      # IPC handlers (main process)
│   │   └── schemas/       # Zod validation schemas
│   ├── main/              # Electron main process
│   └── preload/           # Preload scripts
├── resources/             # Build resources, icons
├── package.json
├── electron-builder.yml   # Build configuration
└── electron.vite.config.ts
```

## 🛠️ Development Workflow

1. **Start Development Server**
   ```bash
   npm run dev
   ```

2. **Code Formatting**
   ```bash
   npm run format
   ```

3. **Linting**
   ```bash
   npm run lint
   ```

4. **Building for Production**
   ```bash
   # Build for specific platforms
   npm run build:win     # Windows
   npm run build:mac     # macOS
   npm run build:linux   # Linux

   # Build unpacked for testing
   npm run build:unpack
   ```

## 🎯 Key Features to Leverage

### 1. **Conveyor IPC System**
Type-safe communication between main and renderer processes:

```tsx
// In React components
import { useConveyor } from '@/app/hooks/use-conveyor'

function MyComponent() {
  const { version } = useConveyor('app')

  const handleClick = async () => {
    const appVersion = await version()
    console.log('App version:', appVersion)
  }
}
```

### 2. **Custom Window Components**
- Custom titlebar with your branding
- Built-in menu system
- Window controls (minimize, maximize, close)

### 3. **Theme System**
- Built-in dark/light mode support
- TailwindCSS + Shadcn UI components
- Easy customization

### 4. **Path Aliases**
Clean imports with pre-configured aliases:
```tsx
import { Button } from '@/app/components/ui/button'
import { conveyor } from '@/lib/conveyor/api'
```

## 📦 Customization Tips

### Adding New IPC Methods
1. Define schema in `lib/conveyor/schemas/`
2. Add API method in `lib/conveyor/api/`
3. Implement handler in `lib/conveyor/handlers/`
4. Register handler in `lib/main/app.ts`

### Updating App Icon
Replace files in `resources/build/` directory:
- `icon.png` - Main app icon
- `icon.ico` - Windows icon
- `icon.icns` - macOS icon

### Customizing UI
- Modify components in `app/components/`
- Update styles in `app/styles/`
- Use Shadcn UI components for consistency

## 🚀 Deployment

1. **Configure signing** (optional)
   - Update `electron-builder.yml` with signing certificates
   - Set up code signing for macOS/Windows

2. **Set up auto-updates** (optional)
   - Configure update server in `electron-builder.yml`
   - Implement update checking in your app

3. **Build for distribution**
   ```bash
   npm run build:win
   npm run build:mac
   npm run build:linux
   ```

## 📚 Additional Resources

- [Electron Documentation](https://www.electronjs.org/docs)
- [React Documentation](https://react.dev)
- [TailwindCSS Documentation](https://tailwindcss.com)
- [Shadcn UI Components](https://ui.shadcn.com)
- [Vite Documentation](https://vitejs.dev)

## 🤝 Contributing

This template is maintained by MMC Forge. To contribute:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📄 License

MIT License - feel free to use for personal and commercial projects.

---

**Original Template**: Based on the excellent work by [Guasam](https://github.com/guasam) from [electron-react-app](https://github.com/guasam/electron-react-app).