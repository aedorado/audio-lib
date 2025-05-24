export default function Footer() {
  return (
    <footer className="text-center text-gray-500 text-sm py-6 border-t mt-5">
      <p>© {new Date().getFullYear()} BDDS Audio Archive. All rights reserved.</p>
      <p className="mt-1">Built with ❤️ for the devotee community</p>
    </footer>
  );
}
