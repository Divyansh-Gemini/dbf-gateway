# 🚀 DBF Gateway

**DBF Gateway** is a simple system used to take attendance and redirect participants to online sessions. It is designed
to be a generic tool for any gathering, such as YMHT sessions, MBA sessions, or general satsangs.

## 🛠 Tech Stack

* **Framework**: Next.js 16 (App Router)
* **UI Library**: HeroUI
* **Styling**: Tailwind CSS v4
* **Language**: TypeScript

<p align="center">
    <a href="https://www.dadabhagwan.org/">
        <img src="https://skillicons.dev/icons?i=nextjs,react,tailwindcss,ts" alt="tech stack" />
    </a>
</p>

---

## ✨ Key Features

* **Dynamic Setup**: Change the session name, banner, and footer in one config file without touching the code.
* **Fast Check-in**: Remembers user details for the day so they do not have to re-type their information.
* **Automatic Data**: Captures the user's city and a unique device ID automatically.
* **Audio Feedback**: Custom sounds play when switching themes or submitting the form.
* **Google Sheets Integration**: Sends all attendance data directly to a Google Sheet.

---

## 📂 Quick Setup

### 1. Environment Variables

Create a `.env.local` file in the root directory and add your credentials:

```env
# Google Apps Script Web App URL
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/xyz.../exec

# The destination meeting link (Google Meet, Zoom, etc.)
NEXT_PUBLIC_MEET_URL=https://meet.google.com/xyz-xyz-xyz

```

### 2. Configuration

Update `src/config/site.ts` with your specific text and images.

### 3. Assets

Place your logos and banners in the `public/assets/` folder.

---

## 📝 How it Works

1. **Identify**: The app identifies the user's device on page load.
2. **Submit**: The user enters their name and mobile number.
3. **Log**: Data is saved to a Google Sheet via a background API call.
4. **Join**: The user is instantly redirected to the meeting link.
