interface CaseTestimonialProps {
  quote: string;
  author: string;
  role: string;
}

const CaseTestimonial = ({ quote, author, role }: CaseTestimonialProps) => {
  return (
    <div className="py-10">
      <blockquote className="rounded-xl border border-accent p-8 sm:p-10">
        <p className="text-xl sm:text-2xl font-medium tracking-tight leading-snug mb-6">
          &ldquo;{quote}&rdquo;
        </p>
        <footer className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{author}</span>
          {" - "}
          {role}
        </footer>
      </blockquote>
    </div>
  );
};

export default CaseTestimonial;
