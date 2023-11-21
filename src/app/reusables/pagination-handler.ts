export abstract class PaginationHandler {

  totalPages = 0
  itemsPerPage = 0;
  currentPage: number = 0;
  calculatedTotalPages = 0

  constructor() {

  }
  setTotalPages(totalPagesInput :number){
    this.totalPages=totalPagesInput

  }
  canGoBack() {
    return 0 <= this.currentPage - 1
  }

  canGoForward() {
    return this.calculatedTotalPages > this.currentPage +1
  }

  get numberArray(): number[] {
    this.calculatedTotalPages = this.customRound(this.totalPages / this.itemsPerPage)
    return Array.from({length: this.calculatedTotalPages}, (_, index) => index);
  }

  backPage() {
    if (!this.canGoBack()) return;

    this.currentPage--;
    this.getNotesForCurrPage();
  }

  nextPage() {
    if (!this.canGoForward()) return;
    this.currentPage++;
    this.getNotesForCurrPage();
  }

  toPage(i: number) {
    console.log(i)
    this.currentPage = i;
    this.getNotesForCurrPage();
  }
  private customRound(number: number): number {
    const decimalPart = number - Math.floor(number);
    const roundedDecimal = Math.ceil(decimalPart);
    // console.log(decimalPart +"-"+roundedDecimal)
    return Math.floor(number) + roundedDecimal;
  }

  abstract getNotesForCurrPage();
}
