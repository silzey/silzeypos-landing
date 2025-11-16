export function Footer() {
  return (
    <footer className="py-8 border-t border-border/40 bg-background">
      <div className="container mx-auto px-6 md:px-10 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Green Leaf Guide. All rights reserved.</p>
      </div>
    </footer>
  );
}
