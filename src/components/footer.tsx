export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <p>&copy; {currentYear} Lawal Giyath. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
