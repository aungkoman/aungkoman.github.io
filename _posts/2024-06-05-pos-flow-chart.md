---
layout: post
title:  "Why we blame each others?"
date:   2024-06-05 08:15:00 +0630
categories: note
---

Judge each others all the times.

```mermaid
flowchart TD
    A[Start] --> B[User Authentication]
    B -->|Valid| C[Select Transaction Type]
    B -->|Invalid| B
    C --> D[New Sale]
    C --> E[Refund]
    C --> F[View Transactions]

    D --> G[Scan/Select Items]
    G --> H[Add to Cart]
    H --> I[Edit Quantity]
    I --> J[Remove Items]
    J --> K[Apply Discounts]

    K --> L[Calculate Total]
    L --> M[Payment Method Selection]

    M --> N[Cash]
    M --> O[Card]
    M --> P[Mobile Payment]

    N --> Q[Enter Cash Received]
    Q --> R[Calculate and Display Change]
    R --> S[Print/Email Receipt]
    S --> T[Update Inventory]
    T --> U[Log Transaction]
    U --> C

    O --> V[Swipe/Insert Card]
    V --> W[Process Transaction]
    W --> X[Print/Email Receipt]
    X --> T

    P --> Y[Scan QR Code/NFC]
    Y --> W

    E --> Z[Select Transaction]
    Z --> AA[Verify Items]
    AA --> AB[Process Refund]
    AB --> T
    T --> AC[Log Transaction]
    AC --> S

    F --> AD[Display Transaction History]
    AD --> AE[Print/Email Details]
    AE --> C

    C --> AF[Log Out]
    AF --> AG[End]
 
 ```
 