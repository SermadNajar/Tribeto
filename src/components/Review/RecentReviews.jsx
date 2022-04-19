import ReviewCard from "../Review/ReviewCard";

export default function Recent() {
  return (
    <>
      <div className="my-8 p-4">
        <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-8 md:grid-cols-8">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
    </>
  );
}
