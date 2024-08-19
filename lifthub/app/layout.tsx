import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "LiftHub | %s",
    default: "LiftHub",
  },
  description:
    "Track your fitness journey with LiftHub, a powerful workout tracker that helps you log exercises, monitor progress, and achieve your fitness goals. Featuring personalized workout logs, detailed exercise records, and intuitive analytics, our app integrates seamlessly with your daily routine. Start optimizing your workouts today and reach new heights with LiftHub.",
  keywords: [
    "Workout Tracker",
    "Fitness App",
    "Exercise Log",
    "Workout Logs",
    "Fitness Progress",
    "Personal Training",
    "Exercise Tracking",
    "Fitness Goals",
    "Workout Analytics",
    "Gym Tracker",
    "Strength Training",
    "Health and Fitness",
    "Training Log",
    "Workout Planner",
    "Fitness Journal",
    "Gym",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased text-white`}>
        {children}
      </body>
    </html>
  );
}
