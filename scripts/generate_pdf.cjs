const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

async function createResume() {
  const pdfDoc = await PDFDocument.create();
  
  // Standard Letter page: 612 x 792 pt
  const width = 612;
  const height = 792;
  const page = pdfDoc.addPage([width, height]);

  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const leftMargin = 45;
  const rightMargin = 567; // width - 45
  const contentWidth = rightMargin - leftMargin;

  let y = height - 42;

  // Helper to draw text
  function drawText(text, x, yPos, options = {}) {
    page.drawText(text, {
      x,
      y: yPos,
      size: options.size || 9.5,
      font: options.font || fontRegular,
      color: options.color || rgb(0, 0, 0),
    });
  }

  // Helper for centered text
  function drawCenteredText(text, yPos, size, font) {
    const textWidth = font.widthOfTextAtSize(text, size);
    const x = (width - textWidth) / 2;
    page.drawText(text, { x, y: yPos, size, font, color: rgb(0, 0, 0) });
  }

  // Helper for section header
  function drawSectionHeader(title) {
    y -= 13;
    drawText(title, leftMargin, y, { size: 10, font: fontBold });
    y -= 3;
    page.drawLine({
      start: { x: leftMargin, y },
      end: { x: rightMargin, y },
      thickness: 0.75,
      color: rgb(0, 0, 0),
    });
    y -= 10;
  }

  // Wrap text to width
  function wrapText(text, font, size, maxWidth) {
    const words = text.split(' ');
    const lines = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      const testLine = currentLine + ' ' + word;
      const testWidth = font.widthOfTextAtSize(testLine, size);
      if (testWidth <= maxWidth) {
        currentLine = testLine;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    lines.push(currentLine);
    return lines;
  }

  // 1. Header: SIVA BHASKAR KORA
  drawCenteredText('SIVA BHASKAR KORA', y, 15, fontBold);
  y -= 18;

  // Subheader Links
  const linkSize = 8.5;
  drawText('Linkedin: linkedin.com/in/siva-bhaskar-kora', leftMargin, y, { size: linkSize, font: fontRegular });
  const emailText = 'Email: sivabhaskarkora@gmail.com';
  const emailWidth = fontRegular.widthOfTextAtSize(emailText, linkSize);
  drawText(emailText, rightMargin - emailWidth, y, { size: linkSize, font: fontRegular });
  y -= 11;

  drawText('Github: github.com/Siva218889', leftMargin, y, { size: linkSize, font: fontRegular });
  const mobileText = 'Mobile: +919154008871';
  const mobileWidth = fontRegular.widthOfTextAtSize(mobileText, linkSize);
  drawText(mobileText, rightMargin - mobileWidth, y, { size: linkSize, font: fontRegular });
  y -= 6;

  // 2. OBJECTIVE
  drawSectionHeader('OBJECTIVE');
  const objText = 'Aspiring AI/ML Engineer with strong foundations in Python, machine learning, computer vision, and data analysis. Hands-on experience in building ML pipelines, sentiment analysis systems, and intelligent hardware-software solutions. Passionate about applying AI to real-world problems and developing scalable, data-driven systems.';
  const objLines = wrapText(objText, fontRegular, 8.5, contentWidth);
  for (const line of objLines) {
    drawText(line, leftMargin, y, { size: 8.5, font: fontRegular });
    y -= 10.5;
  }
  y -= 2;

  // 3. SKILLS
  drawSectionHeader('SKILLS');
  const skillsData = [
    { label: 'Languages: ', val: 'Python, SQL' },
    { label: 'Libraries & Frameworks: ', val: 'Pandas, NumPy, Scikit-learn, OpenCV, Flask, Matplotlib, Seaborn.' },
    { label: 'Tools/Platforms: ', val: 'SQL Server, MySQL, GitHub, Visual Studio Code, Jupyter Notebook' },
    { label: 'Soft Skills: ', val: 'Analytical Thinking, Problem-Solving, Teamwork, Communication' },
    { label: 'Core Competencies: ', val: 'Machine Learning, Computer Vision, Data Analysis, Model Evaluation, NLP.' },
  ];

  for (const s of skillsData) {
    drawText('•', leftMargin + 8, y, { size: 8.5, font: fontBold });
    drawText(s.label, leftMargin + 20, y, { size: 8.5, font: fontBold });
    const labelWidth = fontBold.widthOfTextAtSize(s.label, 8.5);
    drawText(s.val, leftMargin + 20 + labelWidth, y, { size: 8.5, font: fontRegular });
    y -= 11;
  }
  y -= 2;

  // 4. INTERNSHIP
  drawSectionHeader('INTERNSHIP');
  // Company & Dates
  drawText('Fluent Grid', leftMargin, y, { size: 9, font: fontBold });
  const internDate = 'March 2026 – May 2026';
  const internDateWidth = fontRegular.widthOfTextAtSize(internDate, 8.5);
  drawText(internDate, rightMargin - internDateWidth, y, { size: 8.5, font: fontRegular });
  y -= 11;

  drawText('End-to-End Data Pipelines to LLM Fine-Tuning Intern', leftMargin, y, { size: 8.5, font: fontOblique });
  y -= 11;

  // Bullet 1: About
  const aboutText = 'About:Worked on data preprocessing, machine learning, and predictive analytics using Python- based data pipelines. Performed Exploratory Data Analysis (EDA), visualization, and SQL-based ETL operations.';
  const aboutLines = wrapText(aboutText, fontRegular, 8.5, contentWidth - 20);
  drawText('•', leftMargin + 8, y, { size: 8.5, font: fontBold });
  for (let i = 0; i < aboutLines.length; i++) {
    drawText(aboutLines[i], leftMargin + 20, y, { size: 8.5, font: fontRegular });
    y -= 10.5;
  }
  y -= 1;

  // Bullet 2: Tech stacks
  const techText = "Tech stacks used: Python, Pandas, NumPy, Scikit-learn, SQL Server, OpenCV, Matplotlib, Flask, LLM's(LoRA & QLoRA).";
  const techLines = wrapText(techText, fontRegular, 8.5, contentWidth - 20);
  drawText('•', leftMargin + 8, y, { size: 8.5, font: fontBold });
  for (let i = 0; i < techLines.length; i++) {
    drawText(techLines[i], leftMargin + 20, y, { size: 8.5, font: fontRegular });
    y -= 10.5;
  }
  y -= 2;

  // 5. PROJECTS
  drawSectionHeader('PROJECTS');
  
  // Project 1
  drawText('360° Feedback Sentiment Hub (AI/ML Project):', leftMargin, y, { size: 9, font: fontBold });
  const p1Date = 'December 2025';
  const p1DateWidth = fontRegular.widthOfTextAtSize(p1Date, 8.5);
  drawText(p1Date, rightMargin - p1DateWidth, y, { size: 8.5, font: fontRegular });
  y -= 11;

  const p1Bullets = [
    'Developed an automated OCR-based sentiment analysis system for structured feedback data.',
    'Applied NLP techniques to classify and analyze sentiment for actionable insights.',
    'Built real-time dashboards to visualize sentiment trends and category-wise analytics.',
    'Tech: Python, Flask, Pytesseract, TextBlob, NLP, Chart.js'
  ];
  for (const b of p1Bullets) {
    drawText('•', leftMargin + 8, y, { size: 8.5, font: fontBold });
    drawText(b, leftMargin + 20, y, { size: 8.5, font: fontRegular });
    y -= 10.5;
  }
  y -= 3;

  // Project 2
  drawText('Turn Signal Biking Jacket:', leftMargin, y, { size: 9, font: fontBold });
  const p2Date = 'April 2023';
  const p2DateWidth = fontRegular.widthOfTextAtSize(p2Date, 8.5);
  drawText(p2Date, rightMargin - p2DateWidth, y, { size: 8.5, font: fontRegular });
  y -= 11;

  const p2Bullets = [
    'Built a smart biking jacket using Arduino and MPU-6050.',
    'Implemented gesture-based LED turn indicators.',
    'Increased rider visibility by 75% in low-light conditions.',
    'Tech: Arduino, MPU-6050, Embedded Systems, Sensors'
  ];
  for (const b of p2Bullets) {
    drawText('•', leftMargin + 8, y, { size: 8.5, font: fontBold });
    drawText(b, leftMargin + 20, y, { size: 8.5, font: fontRegular });
    y -= 10.5;
  }
  y -= 2;

  // 6. EDUCATION
  drawSectionHeader('EDUCATION');

  // School 1
  drawText('•', leftMargin + 8, y, { size: 8.5, font: fontBold });
  drawText('Presidency University', leftMargin + 20, y, { size: 8.5, font: fontBold });
  const edu1Loc = 'Bangalore, India';
  drawText(edu1Loc, rightMargin - fontRegular.widthOfTextAtSize(edu1Loc, 8.5), y, { size: 8.5, font: fontRegular });
  y -= 10.5;

  drawText('Bachelor of Technology – Computer Engineering (AI & ML)', leftMargin + 20, y, { size: 8.5, font: fontRegular });
  const edu1Date = 'Since November 2022';
  drawText(edu1Date, rightMargin - fontRegular.widthOfTextAtSize(edu1Date, 8.5), y, { size: 8.5, font: fontRegular });
  y -= 10.5;

  drawText('CGPA: 7.64', leftMargin + 20, y, { size: 8.5, font: fontRegular });
  y -= 12;

  // School 2
  drawText('•', leftMargin + 8, y, { size: 8.5, font: fontBold });
  drawText('Aditya Junior College', leftMargin + 20, y, { size: 8.5, font: fontBold });
  const edu2Loc = 'Kakinada, India';
  drawText(edu2Loc, rightMargin - fontRegular.widthOfTextAtSize(edu2Loc, 8.5), y, { size: 8.5, font: fontRegular });
  y -= 10.5;

  drawText('Intermediate', leftMargin + 20, y, { size: 8.5, font: fontRegular });
  const edu2Date = 'June 2020 - March 2022';
  drawText(edu2Date, rightMargin - fontRegular.widthOfTextAtSize(edu2Date, 8.5), y, { size: 8.5, font: fontRegular });
  y -= 10.5;

  drawText('Percentage: 67%', leftMargin + 20, y, { size: 8.5, font: fontRegular });
  y -= 3;

  // 7. CERTIFICATIONS
  drawSectionHeader('CERTIFICATIONS');
  const certs = [
    { name: 'Google AI Essentials V1', date: 'May 2026' },
    { name: 'Data Science & Analytics — HP Foundation', date: 'September 2025' },
    { name: 'Angular Foundations — ScholarHat', date: 'April 2025' },
    { name: 'Advanced Reinforcement Learning — Infosys Springboard', date: 'April 2025' },
    { name: 'Intro to Supervised & Unsupervised Machine Learning — Simplilearn', date: 'October 2023' }
  ];

  for (const c of certs) {
    drawText('•', leftMargin + 8, y, { size: 8.5, font: fontBold });
    drawText(c.name, leftMargin + 20, y, { size: 8.5, font: fontRegular });
    const cDateWidth = fontRegular.widthOfTextAtSize(c.date, 8.5);
    drawText(c.date, rightMargin - cDateWidth, y, { size: 8.5, font: fontRegular });
    y -= 10.5;
  }
  y -= 2;

  // 8. ACHIEVEMENTS
  drawSectionHeader('ACHIEVEMENTS');
  drawText('IEEE Conference Publication – INDIACom 2026:', leftMargin, y, { size: 9, font: fontBold });
  const achDate = 'April 2026';
  drawText(achDate, rightMargin - fontRegular.widthOfTextAtSize(achDate, 8.5), y, { size: 8.5, font: fontRegular });
  y -= 11;

  const achText = 'Published an IEEE conference paper titled "Government Sentiment Hub: An Information Verification and Analysis Portal" at INDIACom 2026 organized by BVICAM, New Delhi.';
  const achLines = wrapText(achText, fontRegular, 8.5, contentWidth - 20);
  drawText('•', leftMargin + 8, y, { size: 8.5, font: fontBold });
  for (const line of achLines) {
    drawText(line, leftMargin + 20, y, { size: 8.5, font: fontRegular });
    y -= 10.5;
  }

  // Save PDF to public folder
  const pdfBytes = await pdfDoc.save();
  const outDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  const outPath = path.join(outDir, 'Siva_Bhaskar_Kora_Resume.pdf');
  fs.writeFileSync(outPath, pdfBytes);
  console.log('PDF successfully generated at:', outPath, 'Bytes:', pdfBytes.length);
}

createResume().catch(err => {
  console.error('Error creating PDF:', err);
  process.exit(1);
});
