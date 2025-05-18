export default function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-6xl mx-auto text-center text-sm text-gray-400 px-4">
        <p>&copy; {new Date().getFullYear()} The King's Cut. All rights reserved.</p>
        <p className="mt-2">123 Royal Mile, Edinburgh · +44 7890 123456</p>
      </div>
    </footer>
  )
}
