1.What are some differences between interfaces and types in TypeScript?

Interface হলো একটি নির্দিষ্ট কন্ট্রাক্ট, যা কেবল অবজেক্টের গঠন নির্ধারণ করতে ব্যবহৃত হয়। প্রিমিটিভ মান interface দিয়ে ঘোষণা করা যায় না। Interface-এর বিশেষ সুবিধা হলো declaration merging অর্থাৎ একই নামের interface বারবার ঘোষণা করলে TypeScript নিজেই সেগুলোকে একত্রে মিলিয়ে একটি পূর্ণাঙ্গ কাঠামো তৈরি করে। Interface-এর মধ্যে সহজেই inheritance করা যায়, কিন্তু type দিয়ে interface-এর মতো merge করা যায় না।

Type মূলত কোনো ডাটা কী প্রকৃতির হবে তা আগে থেকে নির্ধারণ করার জন্য ব্যবহার করা হয়। একটি মান যদি একবার কোনো নির্দিষ্ট টাইপ হিসেবে ঘোষণা করা হয়, তাহলে সেটি অন্য কোনো টাইপে ভুলভাবে সেট হওয়ার সুযোগ থাকে না। যখন আমরা type দিয়ে নতুন নামে কোনো ডাটা-স্ট্রাকচার বা একাধিক টাইপের সমন্বয় তৈরি করি, তাকে type alias বলা হয়। সাধারণভাবে প্রিমিটিভ টাইপ, ইউনিয়ন টাইপ বা বিভিন্ন টাইপের কম্বিনেশন নির্ধারণ করতে type বেশি ব্যবহৃত হয়।

2.What is the use of the keyof keyword in TypeScript? Provide an example.

keyof হলো TypeScript-এর একটি খুব শক্তিশালী type operatar। এটি কোনো object টাইপের সব প্রপার্টি নাম keys নিয়ে একটা union type তৈরি করে দেয়। যে কোনো টাইপের কী গুলো কী হবে সেটা জানতে বা সেই কী গুলোর উপর নিরাপদে কাজ করতে keyof ব্যবহার করা হয়।

interface User {
  username: string;
  id: number;
  role: string;
}

type UserKeys = keyof User;

const u1: UserKeys = "username";
const u2: UserKeys = "id";
const u3: UserKeys = "email";


