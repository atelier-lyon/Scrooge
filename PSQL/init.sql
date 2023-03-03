CREATE TABLE public.Users(
    UserID int NOT NULL UNIQUE,
    LastName varchar(255),
    FirstName varchar(255),
    PRIMARY KEY (UserID)
);

CREATE TABLE public.Products(
    ProductID uuid UNIQUE,
    Product varchar(255) NOT NULL,
    Stock int NOT NULL,
    Price float,
    SaleDisable boolean,
    PRIMARY KEY (ProductID)
);

CREATE TABLE public.Transactions(
    id uuid UNIQUE,
    ProductID uuid NOT NULL,
    Amount int NOT NULL,
    Price float,
    UserID int,
    TransactionDate timestamp DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (USERID) REFERENCES Users(UserID) ON DELETE CASCADE,
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID) ON DELETE CASCADE
);
