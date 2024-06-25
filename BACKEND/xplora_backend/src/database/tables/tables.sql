-- Use the newly created database
USE XploraToursAndTravels;
GO

-- Drop existing tables if they exist
IF OBJECT_ID('dbo.Reviews', 'U') IS NOT NULL DROP TABLE dbo.Reviews;
IF OBJECT_ID('dbo.Bookings', 'U') IS NOT NULL DROP TABLE dbo.Bookings;
IF OBJECT_ID('dbo.Tours', 'U') IS NOT NULL DROP TABLE dbo.Tours;
IF OBJECT_ID('dbo.Users', 'U') IS NOT NULL DROP TABLE dbo.Users;
GO

-- Create Users table
CREATE TABLE Users (
    id NVARCHAR(36) PRIMARY KEY DEFAULT NEWID(),
    name NVARCHAR(100) NOT NULL,
    email NVARCHAR(100) NOT NULL UNIQUE,
    password NVARCHAR(255) NOT NULL,
    role NVARCHAR(50) NOT NULL CHECK (role IN ('user', 'admin')),
    createdAt DATETIME DEFAULT GETDATE(),
    updatedAt DATETIME DEFAULT GETDATE()
);
GO

-- Create Tours table
CREATE TABLE Tours (
    id NVARCHAR(36) PRIMARY KEY DEFAULT NEWID(),
    name NVARCHAR(100) NOT NULL,
    destination NVARCHAR(255) NOT NULL,
    duration INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    tourType NVARCHAR(100) NOT NULL,
    createdAt DATETIME DEFAULT GETDATE(),
    updatedAt DATETIME DEFAULT GETDATE(),
    isDeleted BIT DEFAULT 0
);
GO

-- Create Reviews table
CREATE TABLE Reviews (
    id NVARCHAR(36) PRIMARY KEY DEFAULT NEWID(),
    userId NVARCHAR(36) NOT NULL FOREIGN KEY REFERENCES Users(id),
    tourId NVARCHAR(36) NOT NULL FOREIGN KEY REFERENCES Tours(id),
    rating INT CHECK (rating >= 1 AND rating <= 5),
    comment NVARCHAR(MAX),
    createdAt DATETIME DEFAULT GETDATE()
);
GO

-- Create Bookings table
CREATE TABLE Bookings (
    id NVARCHAR(36) PRIMARY KEY DEFAULT NEWID(),
    userId NVARCHAR(36) NOT NULL FOREIGN KEY REFERENCES Users(id),
    tourId NVARCHAR(36) NOT NULL FOREIGN KEY REFERENCES Tours(id),
    bookingDate DATETIME DEFAULT GETDATE(),
    status NVARCHAR(50) NOT NULL CHECK (status IN ('booked', 'cancelled', 'completed'))
);
GO