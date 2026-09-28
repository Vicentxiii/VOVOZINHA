import { Container } from "@/components/layout/Container";
import { RatingProof } from "@/components/ui/RatingProof";
import { proof } from "@/content/home";

export function Proof() {
  return (
    <section
      className="bg-canvas pt-18 pb-18 sm:pt-24 sm:pb-24"
      aria-label="Avaliação do estabelecimento"
    >
      <Container size="wide">
        <div className="reveal">
          <RatingProof
            score={proof.scoreLabel}
            reviews={proof.reviewsLabel}
            source={proof.source}
            text={proof.text}
          />
        </div>
      </Container>
    </section>
  );
}
