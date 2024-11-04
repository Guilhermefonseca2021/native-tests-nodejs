class ListManager {
  #maxItems: number;
  items: Array<String>;

  constructor(max = 0) {
    this.#maxItems = max;
    this.items = [];
  }
  
  capacity() {
    return this.#maxItems - this.items.length;
  }

  addItem(item: string) {
    if (this.capacity() > 0) {
      this.items.push(item);
      return;
    }
    
    throw new Error("capacity has been reached");
  }

  removeItem(item: string) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  findItem(item: string) {
    return this.items.includes(item);
  }

  getAllItems() {
    return this.items;
  }
}

export { ListManager };
