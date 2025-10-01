# Socket Chat App - Sistem Terdistribusi

Aplikasi chat real-time sederhana yang dibangun menggunakan Socket.IO dan Express.js untuk demonstrasi komunikasi socket dalam sistem terdistribusi.

## 📋 Deskripsi Proyek

Proyek ini merupakan implementasi aplikasi chat real-time yang mendemonstrasikan konsep komunikasi socket dalam sistem terdistribusi. Aplikasi memungkinkan multiple client untuk berkomunikasi secara real-time melalui server central menggunakan protokol WebSocket.

## 🛠️ Tech Stack

### Backend

- **Node.js** - Runtime environment JavaScript
- **Express.js v4.18.2** - Web framework untuk Node.js
- **Socket.IO v4.7.2** - Library untuk komunikasi real-time bidirectional

### Frontend

- **HTML5** - Struktur halaman web
- **CSS3** - Styling dan layout
- **JavaScript (ES6+)** - Logic client-side
- **Socket.IO Client** - Library client untuk komunikasi dengan server

### Development Tools

- **npm** - Package manager
- **Git** - Version control system

## 🏗️ Arsitektur Sistem

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│     Client 1    │    │     Client 2    │    │     Client N    │
│   (Browser)     │    │   (Browser)     │    │   (Browser)     │
└─────────┬───────┘    └─────────┬───────┘    └─────────┬───────┘
          │                      │                      │
          │        WebSocket     │        WebSocket     │
          │      Connections     │      Connections     │
          │                      │                      │
          └──────────────────────┼──────────────────────┘
                                 │
                    ┌─────────────┴───────────┐
                    │    Socket.IO Server     │
                    │    (Express.js App)     │
                    │      Port: 3000         │
                    └─────────────────────────┘
```

## ⚡ Fitur Utama

- 🔄 **Real-time Communication**: Pesan dikirim dan diterima secara instant
- 👤 **Multi-user Support**: Mendukung multiple client secara bersamaan
- 🕐 **Timestamp**: Setiap pesan menampilkan waktu pengiriman
- 🎨 **Responsive UI**: Interface yang user-friendly dan responsive
- 📱 **Cross-platform**: Dapat diakses dari berbagai device dan browser
- 🔌 **Auto-reconnect**: Otomatis reconnect jika koneksi terputus

## 🚀 Cara Menjalankan Aplikasi

### Prerequisites

Pastikan sudah terinstall:

- Node.js (versi 14 atau lebih baru)
- npm (biasanya sudah bundled dengan Node.js)

### Langkah Instalasi

1. **Clone repository**

   ```bash
   git clone https://github.com/FredyRamadhan/express-chat-app.git
   cd socket-chat-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Jalankan server**

   ```bash
   npm start
   ```

   atau

   ```bash
   node server.js
   ```

4. **Akses aplikasi**
   - Buka browser dan navigasi ke: `http://localhost:3000`
   - Untuk testing multi-user, buka multiple tab atau window browser

## 📂 Struktur Proyek

```
socket-chat-app/
├── public/
│   ├── index.html          # Halaman utama aplikasi
│   └── styles.css          # Styling untuk UI
├── server.js               # Server aplikasi (main file)
├── package.json            # Dependencies dan scripts
└── README.md              # Dokumentasi proyek
```

## 🔧 Konfigurasi

### Server Configuration

- **Port**: 3000 (dapat diubah di `server.js`)
- **Static Files**: Disajikan dari folder `public/`
- **Socket.IO**: Menggunakan default configuration

### Environment Variables

Saat ini aplikasi menggunakan konfigurasi default. Untuk production, disarankan menggunakan environment variables:

```bash
PORT=3000
NODE_ENV=production
```

## 🌐 Konsep Sistem Terdistribusi

### 1. **Client-Server Architecture**

- Multiple client terhubung ke satu server central
- Server bertindak sebagai message broker
- Setiap client memiliki unique socket ID

### 2. **Real-time Communication**

- Menggunakan WebSocket protocol untuk low-latency communication
- Bi-directional communication antara client dan server
- Event-driven programming model

### 3. **Message Broadcasting**

- Server menerima pesan dari satu client
- Broadcast pesan ke semua client yang terhubung
- Maintain connection state untuk setiap client

### 4. **Connection Management**

- Auto-detection untuk client connect/disconnect
- Logging untuk monitoring koneksi
- Graceful handling untuk connection errors

## 📊 Flow Diagram

```mermaid
Client Action               Server Processing              Other Clients
     │                           │                           │
     ├─ Connect ────────────────► │                           │
     │                           ├─ Log: User Connected      │
     │                           │                           │
     ├─ Send Message ───────────► │                           │
     │                           ├─ Receive & Log Message   │
     │                           ├─ Broadcast to All ──────► ├─ Receive Message
     │                           │                           ├─ Display Message
     │                           │                           │
     ├─ Disconnect ─────────────► │                           │
     │                           ├─ Log: User Disconnected  │
```

## 🧪 Testing

### Manual Testing

1. Buka multiple browser tabs ke `http://localhost:3000`
2. Kirim pesan dari satu tab
3. Verifikasi pesan muncul di semua tab
4. Test disconnect/reconnect functionality

### Load Testing

Untuk testing dengan banyak user, dapat menggunakan tools seperti:

- Artillery.io
- Socket.IO Load Tester
- Custom script dengan socket.io-client

## 🔒 Security Considerations

Untuk production deployment, pertimbangkan:

- Rate limiting untuk prevent spam
- Input validation dan sanitization
- CORS configuration
- Authentication dan authorization
- HTTPS/WSS encryption

## 📈 Pengembangan Lebih Lanjut

Fitur yang dapat ditambahkan:

- [ ] User authentication
- [ ] Private messaging
- [ ] Chat rooms/channels
- [ ] File sharing
- [ ] Message history persistence
- [ ] Typing indicators
- [ ] User status (online/offline)
- [ ] Message reactions/emojis

## 🐛 Troubleshooting

### Common Issues

**Port sudah digunakan:**

```bash
Error: listen EADDRINUSE :::3000
```

*Solution*: Ubah port di `server.js` atau kill process yang menggunakan port 3000

**Module tidak ditemukan:**

```bash
Error: Cannot find module 'express'
```

*Solution*: Jalankan `npm install` untuk install dependencies

**Koneksi gagal:**

- Pastikan server berjalan di port yang benar
- Check firewall settings
- Verifikasi network connectivity

## 📝 Lisensi

Proyek ini dibuat untuk keperluan tugas akademik Sistem Terdistribusi.

## 📞 Kontak

Untuk pertanyaan atau feedback, hubungi:

- Fredy Tri Ramadhan
- Ivan Wahyu Nugroho

---

*Dibuat dengan ❤️ untuk mata kuliah Sistem Terdistribusi*
