---
layout: post
title:  "Why we need architecture patterns in software development"
date:   2023-10-14 16:00:00 +0630
categories: howto
---


ကျွန်တော် ပရိုဂရမ်ရေးတဲ့အခါ ဘာလို့ Architecture Patterns တွေ သုံးဖြစ်တာလဲ?

ပရိုဂရမ်ရေးတယ်ဆိုတာ ကွန်ပျူတာ စကရင်မှာ ဖိုင် သုံးလေးခု တစ်ပြိုင်တည်းဖွင့်ထားရင်း စိတ်ထဲမှာလည်း ဒီဖိုင်တွေရဲ့ ဆက်သွယ်ချက်တွေကို Mental Model တစ်ခုတည်ဆောက်ပြီး အလုပ်လုပ်ရတာမျိုး။ 

ပရောဂျက်တစ်ခုကနေ တစ်ခု အကူးအပြောင်းမှာ ဒီ Mental Model ကိုအစကနေအဆုံး ပြန်တည်ဆောက်ရတာက အတော်လေး စိတ်ပင်ပန်းရတယ်။ အစောပိုင်းကာလာတွေမှာ ပရောဂျက်တစ်ခုစပြီဆိုရင် ကိုယ့်သဘောနဲ့ကိုယ် စိတ်ထဲထင်ရာ Directory Structure ချတယ်။ တစ်ဖိုင်ထဲမှာပဲ UI, Business Logic နဲ့ Database Query တွေ ပေါင်းရေးလို့ရေး ။ အတော်လေးကို စိတ်ထင်တိုင်း လုပ်ခဲ့တာ။ ဒီလိုစိတ်ထင်ရာတွေ Structure ချခဲ့တော့ နောက်ပိုင်း ပရောဂျက်တစ်ခု နဲ့ တစ်ခု အကူးအပြောင်း Mental Model ကို ပြန်တည်ဆောက်ရတဲ့အချိန်မှာ ဝန်ပိလာတယ်။

ဒါနဲ့ မဖြစ်ချေဘူး၊ တစ်ခြား Professional တွေကရော ဒီလိုပဲ တစ်ခုနဲ့တစ်ခု အကူးအပြောင်းမှာ တိုင်ပတ်နေကြတာလား လိုက်ဖတ်ကြည့်တော့ Architecture Pattern ဆိုတာ ရှိမှန်းသိလာတယ်။ Web မှာဆိုရင် MVC, Android မှာဆိုရင် MVVC , API ဘက်ကမှာဆိုရင်လည်း Restful စသည်ဖြင့် ကိုယ့်လုပ်နေတဲ့ နယ်ပယ်အလိုက် အများစု လက်ခံကျင့်သုံးနေတဲ့ Architecture Pattern တွေ ရှိကြတယ်။ 

Frontend မှာ MVC ရဖို့အတွက် Backbone.js ပြောင်းသုံးလိုက်တယ်။ ကုတ်က အတော်လေး စနစ်ကြပြီး ကိုယ်ကိုယ်ကိုလည်း ယုံကြည်မှုရှိလာတယ်။ Backend API အတွက်က Restful ပေါ့။ ဘွဲ့ယူစာတမ်းက Webservice အထူးပြုဆိုတော့ Restful နဲ့ အပြိုင် SOAP တို့ဘာတို့လည်း လိုက်ကြည့်ပေမယ့် အကုန်လုံးလိုလိုက Restful မှ Restful ဆိုတော့လည်း နောက်ပိုင်း Rest ပဲ​ ဆက် ful လိုက်ရတယ်။ Android ရဲ့ MVVM ကတော့ ကိုယ်မရင်းနှီးတဲ့ Architecture Pattern ဆိုတော့ အတော်လေး ရွာတွေလည်ခဲ့တာ။ 

Pattern တစ်ခုနဲ့ အသားကျသွားပြီး ဆိုရင် ပရောဂျက် အကူးအပြောင်းမှာ အရင်ကလို Mental Model ဆောက်ဖို့ မပင်ပန်းရတော့ဘူး။ ကိုယ့် code base တစ်ခုလုံးကို အစအဆုံးလိုက်မကြည့်ရပဲ တစ်ခုနဲ့ တစ်ခု ဘယ်လိုချိတ်ဆက်ထားတယ်ဆိုတာကို ခေါင်းထဲမှာ cache ဖမ်းထားသလို လွယ်လွယ်ကူကူ ပြန်ဆွဲထုတ်ကြည့်လို့ရလာတယ်။

Flutter ဘက်ကို ကူးလာတော့ Flutter မှာ အများစုလက်ခံကျင့်သုံးကြတဲ့ Architecture Pattern ဆိုပြီး မတွေ့ရဘူး။ ဒါနဲ့ ရှာရင်းဖွေရင်းစမ်းရေးရင်းနဲ့ Clean Architecture ကို သွားတွေ့တယ်။ Web ဘက်ကမှာလည်း အရင်က PHP နဲ့ ရေးတာကနေ Laravel ကို ကူးလာခဲ့တယ်။ Frontend မှာ Backbone.js က ခေတ်မရှိတော့ React ကို မဖြစ်မနေ ကူးလာခဲ့တယ်။ ဘယ်ကိုပဲ ကူးကူး ပြောင်းသွားတဲ့ Architecture Pattern ကို အရင်နားလည်အောင်လုပ်ပြီးမှ Syntax တွေ လိုက်လေ့လာဖြစ်တယ်။ Redux Pattern ကို နားမလည်ပဲ React တို့ Vue တို့ရဲ့ ရေးထုံးတွေ ကြည့်မယ်ဆိုရင် ငရဲခံရသလိုပဲ​ဖြစ်မယ် ထင်ရဲ့။

နောက်ပိုင်းမှာ Project တွေက ကိုယ်တစ်ယောက်တည်းနဲ့ ထင်ရာဆိုင်းရေးလို့မရတော့ပဲ Team နဲ့ ရေးဖို့ဖြစ်လာတဲ့အခါ Architecture Pattern တစ်ခုခုကို လိုက်နာပြီး ရေးရတာက ကိုယ့်အတွက် အားသာချက်လို ဖြစ်လာတယ်။ ကိုယ့် code base ကို တစ်ဖိုင်ချင်းစီ ဖွင့်ပြီးရှင်းပြစရာမလိုတော့ပဲ MVC ကို ဖတ်လိုက်ကွာ၊ Clean Architecture ကို နားလည်အောင်အရင်လုပ်ပြီးမှ ကုတ်လာဖတ်လို့ ဘာတို့ ပြောဖို့ လွယ်လာတယ်။ 

Bug ပေါင်း သောင်းခြောက်ထောင်နဲ့ Production မှာ ခနခန အကွဲအပြဲတွေ ဖြစ်တဲ့အခါ Testing ဘက်ကိုပါ အာရုံစိုက်ဖို့ ဖြစ်လာတယ်။ အရင်က Testing က လူနဲ့ပဲ တောစစ်တောင်စစ်ပေါ့။ Tester တောင် သက်သက်မှတ်မှတ်မရှိတော့လည်း ခက်သား။ ကောင်းမည် ကောင်းရက်နဲ့ Production ပေါ် တက်သွားမှာ လူအများကြီးက ဝိုင်းသုံးပြီး Bug တွေ တစ်သီကြီး ထွက်လာတာမျိုး။ ဒါနဲ့ Testing ကို လိုတယ်ဆိုပြီး Unit Testing , Integration Testing စသည်ဖြင့်ပေါ့ Software Engineering စာအုပ်ထဲက ခေါင်းစဉ်တွေ အတန်းလိုက်ကြီး ခေါင်းထဲပြန်ရောက်လာတယ်။ ကံကောင်းတာ တစ်ခုက ကိုယ်သုံးနေတဲ့ Architecture Pattern တွေက Test လုပ်ဖို့ အဆင်သင့်ဖြစ်အောင် ရေးထားပြီးဖြစ်နေတာပဲ။ နောက်ပိုင်းကျတော့ Test Driven Development တွေ ဘာတွေတောင် စိတ်ကူးယဉ်လာဖြစ်တယ်။ ဆိုရရင် Architecture Pattern တွေရဲ့ အားသာချက်တွေထဲက တစ်ခုပေါ့။


ခြုံပြီးပြောရရင် Architecture Pattern တစ်ခုခုကို လိုက်နာကျင့်သုံးတဲ့အတွက်

- ကုတ်ရေးတဲ့အချိန်မှာ Metal Model အလွယ်တကူ တည်ဆောက်လာနိုင်မယ်။
- Language တွေ Framework တွေ ဘယ်လိုပဲ ပြောင်းပြောင်း Architecture Pattern ကိုနားလည်မယ်ဆိုရင် လေ့လာရတာ ပိုလွယ်လာမယ်။
- Team နဲ့ရေးတဲ့အခါ Collaboration ပိုကောင်းလာမယ်။
- အလွယ်တကူ Test လုပ်နိုင်တဲ့ ကုတ်တွေ ရေးဖြစ်လာမယ်။ 

ဒါကတော့ ကိုယ်ကြုံနေရတဲ့ ကောင်းကျိုးတွေပေါ့။ အမှန်တော့ ကောင်းကျိုးတွေက ဒီထက်မက အများကြီးရှိပါတယ်။​ Google မှာသာ ရှာကြည့်ပါတော့။ 

ဟ ဒါဆိုရင် အကုန်ကောင်းနေတာလားဆိုတော့လည်း မဟုတ်ပြန်ဘူး။ ဘယ်အရာမဆို အကောင်းနဲ့အဆိုး ဒွန်တွဲနေတာမို့လား။ ဒီမှာ မကောင်းတာကတော့ အခြေခံ CRUD လောက်လုပ်ပြီး Syntax လောက် သိတာနဲ့ အလုပ်မဖြစ်တော့ဘူး။ OOP နဲ့ဆိုင်တဲ့ Concept တွေ သိဖို့လိုမယ်၊​ Functional ဘက်က ဆိုရင်လည်း သူ့ရဲ့ Concept တွေကို နားလည်ဖို့ လိုလာလိမ့်မယ်။ ဒါတွေက w3 school မှာလေ့လာရသလိုတော့ လွယ်ကူနေမှာ မဟုတ်ဘူး။ မြန်မာလို ရေးထားတဲ့ Resource တွေလည်း ရှားပါးတော့ English စာလည်း သေစာရှင်စာလောက် ဖတ်တက်ဖို့ လိုလိမ့်မယ်။ တစ််ချို့စာတွေကြတော့လည်း Background Knowledge ရှိဖို့ လိုတာဆိုတော့ ကွန်ပျူတာသိပ္ပံနယ်ပယ်က မဟုတ်ပဲ အခြားနယ်ပယ်ကနေ အခုမှ ဝင်မယ့်သူတွေအတွက်လည်း နားလည်ရခက်နိုင်တယ်။ 

နောက်ထပ် မကောင်းတာတစ်ခုကတော့ ကုတ်တွေက ပုံမှန်ရေးနေကြထက် ပိုရေးရတာမျိုးတွေ ရှိတယ်။ ဆိုပါဆို့ Authentication အတွက် အရင်က တစ်ဖိုင်တည်းမှာ အကုန်စုရေးလိုက်လို့ ရပေမယ့် ကိုယ်က Architecture Pattern တစ်ခုကို လိုက်နာပြီးရေးမယ်ဆို ဖိုင် လေးငါးခုမှာ ကုတ်တွေ အလီလီ ခွဲပြီး ချိတ်ဆက်ရေးရတာမျိုးတွေ ကြုံရမယ်။

ဆိုတော့ ဒါကတော့ ကျွန်တော် Architecture Pattern တွေ ဘာလို့ သုံးဖြစ်နေတာလဲ ဆိုတာပါပဲ။ ကိုယ့်အတွက် ကိုယ့်အသင်းအဖွဲ့အတွက် အကျိုးအမြတ်ပိုများတဲ့ လမ်းကို ရွေးခဲ့တယ်ပဲ​ဆိုပါတော့။ And I would like to say every penny is worth it.





Why I used architecture patterns in software development?

ဘာလို့ Architecture Patterns တွေကို သုံးဖြစ်တာလဲ?
ဒီလိုနဲ့ Pattern တွေနဲ့ ပျော်ပါးနေရင်းမှ နောက်ပိုင်းမှာ ကိုယ်လမ်းမှန်ကို လျှောက်ခဲ့တာကို 



UI နဲ့ ပက်သတ်တာတွေကို Folder တစ်ခုဆောက်ရင်ဆောက် 

Programming work be like this we need to build mental model in our mind about the connection between several code file.


Absolutely, building a mental model of the connections between various code files and components is a crucial aspect of effective programming. This mental model helps you understand and navigate your codebase, make informed design decisions, and troubleshoot issues more efficiently. Here are some tips on how to build and maintain a strong mental model of your codebase:

1. **Understand the Architecture**:
   - Start by understanding the high-level architecture of your application or system. Identify the major components, their responsibilities, and how they interact with each other.

2. **Read Documentation and Comments**:
   - Carefully read documentation, comments, and code comments within the codebase. Well-written documentation and comments can provide valuable insights into the code's purpose and usage.

3. **Visualize the Structure**:
   - Create visual representations of your codebase, such as flowcharts, diagrams, or mind maps. Visual aids can help you see the relationships between different parts of the code.

4. **Follow Naming Conventions**:
   - Consistent naming conventions for variables, functions, classes, and files can make it easier to understand the purpose and usage of code elements.

5. **Use Version Control**:
   - Version control systems like Git can help you track changes to the codebase over time. You can review commit histories and branch structures to gain insights into how the code has evolved.

6. **Write Modular Code**:
   - Break your code into smaller, modular components with well-defined responsibilities. Each module should have a clear interface and purpose, making it easier to reason about.

7. **Practice Code Reviews**:
   - Engage in code reviews with your peers. Reviewing other people's code and having your code reviewed can help you gain a deeper understanding of different parts of the codebase.

8. **Use Development Tools**:
   - Utilize development tools, such as integrated development environments (IDEs), code editors, and linters, that provide features like code navigation, auto-completion, and code analysis.

9. **Draw on Past Experience**:
   - Draw on your previous experiences with similar technologies or frameworks. Often, the mental models you build in one context can be applied to others.

10. **Incremental Learning**:
    - Take an incremental approach to learning the codebase. Start with a small section and gradually expand your knowledge as you become more comfortable with each part.

11. **Ask Questions and Seek Clarification**:
    - Don't hesitate to ask questions when you encounter something you don't understand. Discussing code with colleagues or seeking help on forums can provide valuable insights.

12. **Debug and Experiment**:
    - Experimentation and debugging can deepen your understanding of code behavior. Use debugging tools to step through code and observe how it executes.

13. **Document Your Mental Model**:
    - Consider documenting your mental model using tools like diagrams or notes. This can serve as a reference for yourself and others working on the project.

14. **Stay Curious**:
    - Stay curious and continuously seek to learn and improve your understanding of the codebase. Technology evolves, and your mental model should evolve with it.

Building and maintaining a mental model of a codebase is an ongoing process. It requires patience, practice, and a commitment to learning. As you invest time and effort into understanding your code, you'll become more effective at developing, maintaining, and troubleshooting software.

----- 

Why I used architecture patterns in software development.

- Lack of Structure
- for cache, don't need to built mental model to adapt every new project
- for maintainability
- for collaboration
- third party integration
- testable code
- single responsibility
- single source of trust
- DIY, KISS, SOLID စသည့် Principle
- RESTFUL 



Architecture patterns in software development are essential for several reasons:

Architecture patterns in software development are essential for several reasons:

1. **Scalability**: Architecture patterns provide a structured way to design software systems that can grow and scale as needed. They help in distributing the workload, optimizing resources, and accommodating increased user loads without a complete overhaul of the system.

2. **Maintainability**: A well-defined architecture pattern makes it easier to understand and modify the software over time. It separates concerns and promotes modular design, making it simpler to add new features or fix bugs without affecting other parts of the system.

3. **Reusability**: Patterns promote the reuse of design and code components, which reduces development time and effort. Reusable components can be used in different parts of the system or even in other projects, leading to greater efficiency in development.

4. **Reliability**: Architecture patterns often include best practices for error handling, fault tolerance, and recovery mechanisms. This enhances the reliability and robustness of the software, making it more resilient to failures and unexpected issues.

5. **Performance**: Certain architecture patterns are optimized for specific types of applications or use cases. Choosing the right pattern can improve the overall performance of the software by optimizing resource usage and minimizing bottlenecks.

6. **Security**: Many architecture patterns include security considerations as part of their design. By following these patterns, developers can implement security measures more effectively, reducing the risk of vulnerabilities and data breaches.

7. **Collaboration**: When working on complex software projects, architecture patterns provide a common language and framework for developers, architects, and stakeholders to communicate and collaborate effectively. This shared understanding helps prevent misunderstandings and promotes a more efficient development process.

8. **Documentation**: Architecture patterns often come with established documentation and best practices. This documentation serves as a valuable resource for developers, making it easier to understand and maintain the software.

9. **Adaptability**: As technology evolves, software systems need to adapt to new requirements and trends. Architecture patterns provide a foundation that can be adjusted and extended as needed, ensuring the software remains relevant and up-to-date.

10. **Quality Assurance**: Using well-established architecture patterns can help ensure that software adheres to industry standards and best practices. This can simplify quality assurance processes and make it easier to validate and verify the software's correctness.

In summary, architecture patterns are essential in software development because they provide a structured approach to designing and building software systems that are scalable, maintainable, reliable, and adaptable to changing requirements. They help developers create high-quality software that meets both functional and non-functional requirements while promoting collaboration and reusability.

If you choose not to use any architectural pattern in your software development, you may encounter several challenges and potential issues:

1. **Lack of Structure**: Without a defined architecture pattern, your software may lack a clear structure and organization. This can lead to code that is difficult to understand and maintain, making it harder to add new features or fix bugs.

2. **Scalability Problems**: Scaling the software to accommodate increased user loads or changing requirements can be challenging without an architectural plan. You may face performance bottlenecks and resource inefficiencies that are difficult to address.

3. **Inconsistency**: Developers working on different parts of the software may adopt varying approaches and coding styles. This can result in inconsistencies, making it challenging to ensure a uniform user experience and maintain code quality.

4. **Maintenance Challenges**: Over time, as the software evolves, it becomes harder to maintain without an architecture pattern. Small changes in one part of the system can inadvertently affect other parts, leading to unintended consequences and more extensive testing efforts.

5. **Limited Reusability**: Without a structured architecture, it's more challenging to identify and extract reusable components or modules. This can lead to duplicated code and increased development effort for similar functionalities in different parts of the system.

6. **Security Risks**: Security considerations may be overlooked or inconsistently implemented without a well-defined architecture. This can expose your software to vulnerabilities and increase the risk of security breaches.

7. **Longer Development Time**: Designing a system from scratch without an architecture pattern can be time-consuming and error-prone. You may spend more time solving design problems that have already been addressed by established patterns.

8. **Difficult Collaboration**: Collaboration among team members can be more challenging when there is no shared architectural vision. This can lead to communication issues and misunderstandings among developers, architects, and stakeholders.

9. **Less Resilience**: The absence of fault-tolerant and error-handling mechanisms can make your software less resilient to failures and less capable of recovering gracefully from unexpected issues.

10. **Reduced Maintainability**: Without architectural guidance, it's easier to accumulate technical debt, leading to a software system that becomes increasingly difficult and costly to maintain over time.

In essence, while it's technically possible to develop software without using an architectural pattern, doing so can lead to a range of issues that affect the quality, maintainability, and scalability of your software. It is generally advisable to leverage established architectural patterns or at least define a clear architecture for your software projects to mitigate these challenges and ensure a more efficient and effective development process.

An architecture pattern in software development is a reusable, high-level structure that provides a proven solution to a recurring design problem or a set of related design problems. It serves as a blueprint or template for designing software systems, helping developers and architects make informed decisions about the organization and structure of their applications. These patterns capture best practices and provide a common vocabulary for discussing software design concepts.

Here are some key characteristics of architecture patterns:

1. **Commonly Used**: Architecture patterns are widely accepted and recognized solutions to common software design challenges. They have been tried and tested in various contexts and are considered best practices.

2. **Abstraction**: These patterns abstract the complexity of a software system, focusing on high-level components and their interactions rather than specific implementation details.

3. **Reusability**: Architecture patterns are designed to be reusable in different projects or scenarios. Developers can apply them as a starting point for designing similar systems.

4. **Modularity**: They promote a modular design, encouraging the separation of concerns and the organization of code into coherent, manageable components.

5. **Scalability**: Many architecture patterns address scalability concerns, enabling the software to handle increased loads or changing requirements without a complete redesign.

6. **Flexibility**: These patterns allow for flexibility in adapting to various business needs and constraints. They can accommodate modifications and extensions without extensive rework.

7. **Documentation**: Architecture patterns often come with documentation that describes the key components, relationships, and principles involved in the pattern's implementation.

8. **Support for Non-functional Requirements**: Many architecture patterns address non-functional requirements, such as performance, security, reliability, and maintainability.

Some common examples of architecture patterns include:

1. **Model-View-Controller (MVC)**: A pattern that separates an application into three interconnected components: Model (data and business logic), View (presentation and user interface), and Controller (input handling and application flow control).

2. **Layered Architecture**: This pattern organizes the application into multiple layers (e.g., presentation, business logic, and data access) to achieve separation of concerns and maintainability.

3. **Microservices**: A pattern where a large, monolithic application is broken down into smaller, independent services that communicate via APIs. This pattern emphasizes scalability and flexibility.

4. **Service-Oriented Architecture (SOA)**: A pattern that designs software as a set of loosely coupled, interoperable services, allowing for reusability and flexibility in integrating various systems.

5. **Event-Driven Architecture (EDA)**: This pattern focuses on communication between components through events or messages. It is useful for building systems that react to asynchronous events.

6. **Hexagonal Architecture**: This pattern enforces a clear separation between the core application logic and external interfaces (e.g., databases, APIs), making the system more testable and adaptable.

7. **Repository Pattern**: A pattern that abstracts data access, providing a consistent interface for interacting with various data storage mechanisms (e.g., databases).

8. **Singleton Pattern**: Not an architectural pattern, but it addresses the creation of a single instance of a class and is used in various architectural contexts.

Choosing the right architecture pattern for a specific project depends on its requirements, constraints, and goals. Applying an appropriate architecture pattern can help streamline development, improve maintainability, and ensure that the software meets its functional and non-functional requirements effectively.

Design principles in software development are fundamental guidelines and best practices that help developers create software systems that are maintainable, scalable, reliable, and easy to understand. These principles serve as a foundation for making design decisions, shaping the architecture of software, and ensuring the software meets its functional and non-functional requirements. Here are some key design principles in software development:

1. **SOLID Principles**:
   - **Single Responsibility Principle (SRP)**: A class should have only one reason to change, meaning it should have a single responsibility.
   - **Open-Closed Principle (OCP)**: Software entities (classes, modules, functions) should be open for extension but closed for modification.
   - **Liskov Substitution Principle (LSP)**: Subtypes must be substitutable for their base types without altering the correctness of the program.
   - **Interface Segregation Principle (ISP)**: Clients should not be forced to depend on interfaces they do not use, and interfaces should be specific to the needs of their clients.
   - **Dependency Inversion Principle (DIP)**: High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details, and details should depend on abstractions.

2. **KISS (Keep It Simple, Stupid)**: This principle advocates simplicity in design. Avoid unnecessary complexity and keep code as simple as possible while still meeting requirements.

3. **DRY (Don't Repeat Yourself)**: Avoid duplicating code and logic. Instead, encapsulate common functionality in reusable components or functions to reduce maintenance overhead.

4. **YAGNI (You Aren't Gonna Need It)**: Don't add functionality until it is necessary. Avoid premature optimization or over-engineering.

5. **Composition Over Inheritance**: Favor composition (building complex objects by combining simpler ones) over inheritance (creating new classes by inheriting from existing ones) to achieve flexibility and maintainability.

6. **Separation of Concerns (SoC)**: Divide a software system into distinct modules or components, each responsible for a specific aspect of functionality. This enhances modularity and maintainability.

7. **Principle of Least Astonishment (POLA)**: Design software in a way that makes it behave in an expected and predictable manner. Avoid surprising or counterintuitive behavior.

8. **Single Source of Truth (SSOT)**: Maintain a single authoritative source for data or configuration, reducing inconsistencies and potential errors.

9. **Law of Demeter (LoD)**: Also known as the "Don't Talk to Strangers" principle, it encourages minimizing the number of dependencies between objects, promoting loose coupling.

10. **Immutable State**: Consider using immutable data structures and objects where possible to avoid unintended side effects and enhance predictability in concurrent programming.

11. **High Cohesion and Low Coupling**: Aim for high cohesion within modules (components) by ensuring that the elements within a module are closely related in functionality. Strive for low coupling between modules to reduce interdependencies.

12. **Fail Fast**: Detect and report errors or invalid inputs as early as possible in the software's execution to prevent further issues and make debugging easier.

13. **Design by Contract (DbC)**: Specify and document the preconditions and postconditions of functions and methods to ensure they behave as expected.

14. **Consistency**: Maintain a consistent coding style, naming conventions, and design patterns throughout the codebase to enhance readability and maintainability.

15. **Testability**: Design software components with testability in mind, making it easier to write unit tests and verify the correctness of the code.

These design principles are not rigid rules but guidelines that can be adapted to suit the specific requirements and constraints of a software project. Applying these principles can lead to software that is easier to develop, maintain, and scale while reducing the risk of errors and technical debt.