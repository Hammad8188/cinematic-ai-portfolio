const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Osama Ali Shah. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with passion for <span className="text-primary">Artificial Intelligence</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
