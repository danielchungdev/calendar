export const getDaySuffix = (day: number) => {
    if (day > 3 && day < 21) return 'th'; // covers 11th, 12th, 13th
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  }