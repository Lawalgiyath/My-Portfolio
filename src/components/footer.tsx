export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-6 border-t">
      <div className="container mx-auto px-4 text-center text-foreground/60">
        <p>&copy; {currentYear} Lawal Giyath. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
