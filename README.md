# Chibi — AI Co-Host & Interactive Broadcast Studio

> An intelligent, broadcast-grade VTuber and streaming studio featuring an Obsidian Glassmorphic desktop interface, 60 FPS 3D avatar overlay, and a multi-device event orchestration pipeline.

[![React](https://img.shields.io/badge/React-18.3-61dafb.svg?style=flat-square&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8.svg?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Electron](https://img.shields.io/badge/Electron-33-47848F.svg?style=flat-square&logo=electron)](https://www.electronjs.org/)
[![Python](https://img.shields.io/badge/Python-3.11-3776ab.svg?style=flat-square&logo=python)](https://python.org/)
[![Android](https://img.shields.io/badge/Android-Kotlin-3DDC84.svg?style=flat-square&logo=android)](https://developer.android.com/)

---

## 📸 Studio Showcase

![Chibi Live Studio](assets/chibi_preview.png)

---

## 🏗️ System Architecture

Chibi connects desktop streaming environments, live chat feeds, mobile payment notifications, and hardware-accelerated 3D avatars into a unified local broadcast pipeline:

```mermaid
graph TD
    subgraph Mobile Device
        APK["📱 Android Companion App<br/>(NotificationListenerService)"]
    end

    subgraph Core Engine
        HUB["⚡ Local Broadcast Hub<br/>(Thread-Safe SSE & Event Queue)"]
        CHAT["💬 YouTube Live Chat Bridge<br/>(Innertube Event Poller)"]
    end

    subgraph Desktop Studio
        STUDIO["🖥️ Chibi Studio (Electron + React 18)<br/>Obsidian Glass UI • Theme Engine • HUD Configurator"]
    end

    subgraph OBS Broadcast
        OVERLAY["🎮 60 FPS 3D Avatar Overlay<br/>Hardware-Accelerated WebGL • Shader HUDs"]
    end

    APK -->|"Encrypted Local HTTP POST"| HUB
    CHAT -->|"Live Superchats & Likes"| HUB
    HUB <-->|"Bidirectional SSE State Sync"| STUDIO
    HUB -->|"Real-Time Event Stream"| OVERLAY
```

---

## 🌟 Key Engineering Highlights

### 1. Multi-Platform Companion Architecture
- **Android Notification Listener Service**: An integrated Android background service that intercepts real-time stream donations and system alerts on mobile devices and relays them to the broadcast server with sub-100ms latency.
- **Zero-Cloud Dependency**: Designed to run entirely on the streamer's local network for absolute privacy and zero subscription fees.

### 2. Obsidian Glassmorphic Studio UI
- Built with **React 18**, **Tailwind CSS**, and **Lucide Icons** within an **Electron** frameless container.
- Real-time bidirectional synchronization: External API pushes update the studio inspector and visual meters simultaneously without UI jitter.

### 3. 60 FPS 3D Avatar & Broadcast HUD Overlay
- Hardware-accelerated 3D avatar rendering with real-time expression and pose reaction pipelines.
- Modular broadcast HUD with dynamic theme palettes (Cyber, Neon, Retro, Obsidian Glass).

## 🔒 Proprietary Architecture Notice

This public repository serves as an architectural portfolio and design system showcase for technical demonstration. The core broadcast daemon, Android companion APK, proprietary 3D avatar meshes, and real-time polling services are closed-source.
