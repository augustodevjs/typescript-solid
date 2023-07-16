# SOLID com TypeScript

This project aims to learn the principles of SOLID and apply them in a real-world context using TypeScript. The application context is about a shopping cart.

SOLID is a set of software design principles that aim to create more flexible, scalable, and maintainable systems. It consists of five principles: Single Responsibility Principle (SRP), Open-Closed Principle (OCP), Liskov Substitution Principle (LSP), Interface Segregation Principle (ISP), and Dependency Inversion Principle (DIP).

The project structure has been organized according to each of the SOLID principles. Each project folder is responsible for implementing a specific principle. Additionally, there is a file called legacy.ts that doesn't adhere to any SOLID principle. It was created for comparison purposes to demonstrate the importance of applying these principles.

### Single Responsibility Principle

The src/srp folder implements the Single Responsibility Principle, which states that a class should have only one responsibility. In this folder, the classes related to the shopping cart are organized based on their responsibilities, such as price calculation and product addition.

### Open-Closed Principle

The src/ocp folder implements the Open-Closed Principle, which states that a class should be open for extension but closed for modification. In this folder, the shopping cart has been implemented in a way that it can be easily extended to handle new types of products or promotions.

### Liskov Substitution Principle

The src/lsp folder implements the Liskov Substitution Principle, which states that a derived class should be substitutable for its base class. In this folder, the shopping cart has been implemented in a way that it can handle different types of products, such as books and electronics, without affecting its behavior.

### Interface Segregation Principle

The src/isp folder implements the Interface Segregation Principle, which states that a class should not depend on interfaces it doesn't use. In this folder, the interfaces related to the shopping cart have been separated based on their responsibilities.

### Dependency Inversion Principle

Finally, the src/dip folder implements the Dependency Inversion Principle, which states that a class should depend on abstractions, not concrete implementations. In this folder, the classes related to the shopping cart depend only on interfaces, not concrete implementations.
