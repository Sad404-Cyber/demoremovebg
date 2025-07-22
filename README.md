<div align="center">

# Background Remover 🖼️✨
[Live Demo](https://drbaph.is-a.dev/RemoveBG/)
</div>

<div align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Mobile_First-000000?style=for-the-badge&logo=responsive&logoColor=white" alt="Mobile First" />
  <img src="https://img.shields.io/badge/Glass_Morphism-000000?style=for-the-badge&logo=glass&logoColor=white" alt="Glass Morphism" />
</div>

<div align="center">
<br>
  
![Rembg-banner](https://github.com/user-attachments/assets/04d100a9-5f65-46cd-b532-d2e23cb3c5bc)


</div>

# RemoveBG - Local AI-Powered Background Remover

A modern, responsive web application that instantly removes backgrounds from images using AI technology. Built with a focus on user experience, featuring a sleek design with dark/light theme support and seamless mobile optimization.

![RemoveBG Demo](https://img.shields.io/badge/Demo-Live-brightgreen)
![License](https://img.shields.io/badge/License-AGPL--3.0-blue.svg)

## ✨ Features

- **Instant Background Removal** - Process images directly in your browser using advanced AI
- **No Upload Required** - All processing happens client-side for maximum privacy
- **Responsive Design** - Optimized for mobile, tablet, and desktop devices
- **Dark/Light Theme** - Automatic theme detection with manual toggle
- **Drag & Drop** - Intuitive file upload with drag-and-drop support
- **Touch Optimized** - Full touch gesture support for mobile devices
- **Progress Tracking** - Visual feedback during image processing
- **Modern UI** - Glassmorphism effects, smooth animations, and gradient accents
- **Adaptive AI Model** - The app automatically uses a smaller AI model on mobile/tablet for better compatibility and performance, and the full model on desktop for best quality.
- **Client-Side Processing** - Background removal is performed directly in the browser using @imgly/background-removal. Performance may vary depending on device and browser capabilities.

## 🚀 Technologies Used

### Core Technologies
- **HTML5** - Semantic markup and modern web standards
- **CSS3** - Custom animations, transitions, and responsive design
- **JavaScript (ES6+)** - Modern JavaScript with async/await and modules
- **Tailwind CSS** - Utility-first CSS framework for rapid styling

### Libraries & APIs
- **[@imgly/background-removal](https://github.com/imgly/background-removal-js)** - AI-powered background removal library (AGPL-3.0 License)
- **Phosphor Icons** - Beautiful icon library for UI elements
- **ONNX Runtime** - Machine learning inference in the browser

### Design Patterns
- **Glassmorphism** - Modern glass-like UI effects
- **Responsive Grid System** - Mobile-first responsive design
- **Progressive Enhancement** - Core functionality works everywhere
- **Accessibility First** - ARIA labels and keyboard navigation


## 💻 Usage

1. **Upload an Image**
   - Click the upload area or drag and drop an image
   - Supports PNG, JPG, and WEBP formats
   - Maximum file size: 10MB

2. **Wait for Processing**
   - Watch the progress indicator as the AI processes your image
   - Processing happens entirely in your browser

3. **Download Result**
   - Click "Download PNG" to save your image with transparent background
   - Use "New Image" to process another photo

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Configuration

The app includes several customizable features:

- **Theme**: Automatically detects system preference, manually toggleable
- **File Types**: Accepts `image/png`, `image/jpeg`, `image/webp`
- **Max File Size**: 10MB 

## 📄 License

This project is licensed under the AGPL-3.0 License - see the [LICENSE](LICENSE) file for details.

## 🌐 Live Demo

Visit the live application at: [https://drbaph.is-a.dev/RemoveBG](https://drbaph.is-a.dev/RemoveBG)

## 🙏 Acknowledgements

- [Github.com/imgly/background-removal-js](https://github.com/imgly/background-removal-js)
- [Github.com/microsoft/onnxruntime](https://github.com/microsoft/onnxruntime)

