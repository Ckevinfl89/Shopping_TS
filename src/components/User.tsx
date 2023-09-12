// User.ts
export class User {
    private name: string;
    private age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    // Getter methods for name and age if needed
  
    static loginUser(): User | null {
      const nameInput = document.getElementById("name") as HTMLInputElement;
      const ageInput = document.getElementById("age") as HTMLInputElement;
  
      const name = nameInput.value.trim();
      const age = parseInt(ageInput.value);
  
      if (name && !isNaN(age)) {
        return new User(name, age);
      } else {
        return null;
      }
    }
  }
  