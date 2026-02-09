# 💖 Valentine's Day Proposal Webpage

A cute and playful Valentine's Day proposal webpage built with Next.js and React. Customize it with your own messages, GIFs, and music!

## ✨ Features

- 🎀 Soft romantic pastel pink theme with gradient background
- 💖 Floating heart animations throughout the page
- 📝 Customizable heading with your loved one's name
- 🖼️ Display a custom GIF of your choice
- 💕 Interactive YES button that opens a cute love letter modal
- 🙈 Playful NO button that moves away when hovered
- 🎵 Optional background music that plays after clicking YES
- ✍️ Beautiful love letter in handwritten font
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Built with Next.js App Router and Tailwind CSS

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. **Clone or download this project**

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env.local` file** in the root directory with your customizations:
   ```env
   NEXT_PUBLIC_GF_NAME=Your GirlFriend Name
   NEXT_PUBLIC_VALENTINE_LETTER=Every moment with you feels like a dream. You make my heart skip a beat. Will you be my Valentine forever?
   NEXT_PUBLIC_VALENTINE_GIF=https://media.giphy.com/media/2wSaulb0fsDydh0fDQ/giphy.gif
   NEXT_PUBLIC_BACKGROUND_MUSIC=https://example.com/romantic-song.mp3
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## 🎨 Customization

### Environment Variables

Edit `.env.local` to customize:

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_GF_NAME` | Your loved one's name | Yes |
| `NEXT_PUBLIC_VALENTINE_LETTER` | Your love message in the letter | Yes |
| `NEXT_PUBLIC_VALENTINE_GIF` | URL to a cute GIF | Yes |
| `NEXT_PUBLIC_BACKGROUND_MUSIC` | URL to romantic music (MP3) | No |

### Tips for Finding Media

**GIFs:**
- [Giphy.com](https://giphy.com) - Search for "cute," "romantic," or "valentine"
- [Tenor.com](https://tenor.com) - More animation options

**Music:**
- [Free Music Archive](https://freemusicarchive.org) - Royalty-free romantic music
- [Incompetech](https://incompetech.com) - Creative Commons licensed music
- Or use any direct link to an MP3 file

### Styling

Colors are defined in `app/globals.css` using CSS variables:
- Primary: Soft pink (`#ec4899`)
- Secondary: Rose pink (`#f43f5e`)
- Background: Pastel pink gradient

To change colors, edit the CSS custom properties in `globals.css`:
```css
--primary: 350 90% 55%;
--secondary: 320 85% 65%;
```

## 📦 Deploying to Vercel

### Option 1: Direct Deployment (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/new)
3. Import your GitHub repository
4. Add environment variables in the "Environment Variables" section:
   - `NEXT_PUBLIC_GF_NAME`
   - `NEXT_PUBLIC_VALENTINE_LETTER`
   - `NEXT_PUBLIC_VALENTINE_GIF`
   - `NEXT_PUBLIC_BACKGROUND_MUSIC`
5. Deploy!

### Option 2: Using Vercel CLI

```bash
npm i -g vercel
vercel env add NEXT_PUBLIC_GF_NAME
# Follow the prompts and enter your values
vercel env add NEXT_PUBLIC_VALENTINE_LETTER
vercel env add NEXT_PUBLIC_VALENTINE_GIF
vercel env add NEXT_PUBLIC_BACKGROUND_MUSIC
vercel
```

## 🎯 How It Works

1. **Main Page**: Displays the question with a cute GIF and two buttons
2. **YES Button**: 
   - Opens a beautiful love letter modal
   - Starts playing background music (if provided)
   - Shows a handwritten-style message
3. **NO Button**: 
   - Moves to a random position when you hover over it
   - Can't be clicked
   - Creates a fun, playful interaction

## 📁 Project Structure

```
├── app/
│   ├── globals.css       # Theme colors and animations
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main Valentine page
├── components/
│   ├── floating-hearts.tsx    # Animated hearts background
│   ├── yes-button.tsx         # YES button component
│   ├── no-button.tsx          # NO button that moves on hover
│   └── love-letter-modal.tsx  # Love letter popup
├── env.example          # Example environment variables
├── README.md             # This file
└── package.json          # Dependencies
```

## 🔧 Tech Stack

- **Framework**: Next.js 16+ (App Router)
- **Styling**: Tailwind CSS
- **Fonts**: Poppins (body) & Great Vibes (handwritten)
- **Runtime**: React 19+

## 💡 Tips for the Best Experience

- Use a romantic or cute GIF that represents you both
- Keep the love letter message short but heartfelt (50-150 words)
- Test the music URL before deploying to ensure it works
- Open on a desktop or tablet for the best interactive experience
- Share the URL with your special someone!

## 📝 License

This project is open source and available under the MIT License. Feel free to customize and share!

## 💌 Make It Special

- Add personal photos as the GIF
- Write your own romantic message
- Choose music that's meaningful to you both
- Customize the colors to match your favorite palette

## 🐛 Troubleshooting

**Music not playing?**
- Check that the URL is correct and publicly accessible
- Some browsers require user interaction before playing audio
- Ensure the file format is supported (MP3 recommended)

**GIF not showing?**
- Verify the image URL is valid and accessible
- Try right-clicking the image in your browser to copy the direct link
- Use HTTPS URLs when possible

**Styling looks off?**
- Clear your browser cache and refresh
- Check that all CSS files are loading properly
- Verify CSS is enabled in your browser

---

Made with 💖 for your special someone!
# Valentine-s-Day-Proposal-Webpage
