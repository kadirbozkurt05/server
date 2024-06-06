class Competition {
  constructor(
    title,
    imageUrl,
    date,
    text,
    award,
    awardImageUrl,
    awardText,
    number
  ) {
    (this.name = title),
      (this.picture = imageUrl),
      (this.due_date = Timestamp.fromDate(date)),
      (this.isActive = true),
      (this.winner = []),
      (this.participants = []),
      (this.body = text),
      (this.award = {
        name: award,
        number: number,
        picture: awardImageUrl,
        specifications: awardText,
      });
  }
}
