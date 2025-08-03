# 🌸 Friendship Day Website 🌸

A beautiful, animated Friendship Day website with personalized greetings and memories showcase.

## Features

### Landing Page (`index.html`)
- **Animated Flower Background**: Pure CSS animated flowers floating across the screen
- **Name Input Form**: Elegant form asking visitors to enter their name
- **Smooth Animations**: Beautiful transitions and hover effects
- **Responsive Design**: Works perfectly on all devices

### Personalized Wish Page (`wish.html`)
- **Custom Greeting**: Personalized message based on the entered name
- **Special Content for "Chandu"**: 
  - Beautiful friendship quote
  - "Memories Till Now" section with 14 images + 1 video
  - Interactive carousel with navigation arrows
  - "Wanna Read This?" greeting card with animated GIF
- **Standard Content for Others**: Simple friendship day greeting

## File Structure

```
Friendship-Day-Website/
├── index.html          # Landing page with name input
├── wish.html           # Personalized wish page
├── style.css           # All styles and animations
├── script.js           # JavaScript functionality
├── images/             # Images and videos folder
│   ├── memory1.jpg     # Memory image 1
│   ├── memory2.jpg     # Memory image 2
│   ├── ...
│   ├── memory14.jpg    # Memory image 14
│   └── memory15.mp4    # Memory video
└── README.md           # This file
```

## Setup Instructions

### 1. Add Your Images
Place your memory images and video in the `images/` folder with the following names:
- `memory1.jpg` to `memory14.jpg` (14 images)
- `memory15.mp4` (1 video)

### 2. Customize Content
- **For Chandu**: The website automatically shows special content when "Chandu" is entered
- **For Others**: Simple greeting is shown
- **Quote**: Edit the friendship quote in `wish.html`
- **Greeting Card**: Customize the message in `wish.html`

### 3. Run the Website
Simply open `index.html` in a web browser to start the experience!

## How It Works

### Landing Page Flow
1. User visits `index.html`
2. Beautiful animated flower background is displayed
3. User enters their name in the centered form
4. Form submits and redirects to `wish.html`

### Wish Page Flow
1. **If name is "Chandu"**:
   - Shows personalized greeting with special quote
   - Displays "Memories Till Now" carousel
   - Shows "Wanna Read This?" button
   - Clicking the button reveals a beautiful greeting card

2. **If name is anything else**:
   - Shows simple "Happy Friendship Day, [Name]!" message
   - Hides special sections

## Features Explained

### Animated Flower Background
- Pure CSS flowers with floating animation
- 10 different flowers with staggered animation delays
- Responsive and lightweight

### Memory Carousel
- Instagram-style vertical images
- Navigation arrows ("<" and ">")
- Keyboard navigation (Arrow keys)
- Touch/swipe support for mobile
- Smooth transitions between memories

### Greeting Card
- Decorative flower borders (CSS-styled)
- Animated GIF of friendship bands
- Beautiful typography and layout
- Smooth opening animation

### Responsive Design
- Works on desktop, tablet, and mobile
- Adaptive layouts and font sizes
- Touch-friendly navigation

## Customization Options

### Colors
Edit the CSS variables in `style.css`:
```css
/* Main colors */
--primary-color: #ff69b4;
--secondary-color: #ff1493;
--background-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Animations
Modify animation durations and effects in `style.css`:
```css
/* Animation timing */
--float-duration: 6s;
--slide-duration: 1s;
--fade-duration: 0.5s;
```

### Content
- **Quote**: Edit the quote in `wish.html`
- **Greeting Card Message**: Modify the card content in `wish.html`
- **Images**: Replace images in the `images/` folder

## Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Animations, gradients, flexbox, grid
- **JavaScript (ES6+)**: Dynamic content, event handling
- **Session Storage**: Name persistence between pages

### Performance Features
- Optimized animations using CSS transforms
- Lazy loading for images
- Efficient event handling
- Minimal JavaScript footprint

## Troubleshooting

### Images Not Loading
- Ensure images are in the `images/` folder
- Check file names match exactly: `memory1.jpg`, `memory2.jpg`, etc.
- Verify file formats are supported (JPG, PNG, MP4)

### Animations Not Working
- Ensure CSS is properly linked
- Check browser compatibility
- Disable browser extensions that might interfere

### Form Not Working
- Check JavaScript console for errors
- Ensure `script.js` is properly linked
- Verify browser supports ES6+ features

## Credits

- **Design**: Custom animated flower background
- **Animations**: Pure CSS keyframes
- **GIF**: Friendship bands animation from GIPHY
- **Typography**: System fonts for optimal performance

---

**Happy Friendship Day! 🌸**

*This website is designed to celebrate the beautiful bonds of friendship with a personalized touch.* 