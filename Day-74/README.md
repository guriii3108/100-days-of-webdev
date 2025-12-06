# Day 74 – MongoDB Basics (Introduction, Documents, Collections, CRUD)

## Overview
Today's focus: learning the fundamentals of MongoDB. Understood what NoSQL means, how MongoDB stores data, and performed basic CRUD operations using the MongoDB shell or Compass.

## What I Learned Today
• What MongoDB is and why it's used
• Difference between SQL and NoSQL
• Understanding databases, collections, and documents
• Insert, Find, Update, Delete operations
• Basics of MongoDB Compass or CLI

## Key Concepts

### MongoDB
• NoSQL document database
• Stores data as BSON/JSON objects
• Flexible schema (fields can vary)

### Database Structure
• **Database** → **Collection** → **Documents**
• **Document** = JSON object
• **Collection** = group of documents

## Basic CRUD Operations

### Insert

**Insert one document:**
```javascript
db.users.insertOne({ name: "John", age: 25 })
```

**Insert multiple documents:**
```javascript
db.users.insertMany([
  { name: "A", age: 20 }, 
  { name: "B", age: 30 }
])
```

### Find

**Find all documents:**
```javascript
db.users.find()
```

**Find with filter:**
```javascript
db.users.find({ age: 25 })
```

### Update

**Update one document:**
```javascript
db.users.updateOne(
  { name: "John" },
  { $set: { age: 26 } }
)
```

### Delete

**Delete one document:**
```javascript
db.users.deleteOne({ name: "A" })
```

### Indexing (Basic Intro)

**Create an index:**
```javascript
db.users.createIndex({ name: 1 })
```

## Tools I Used
• MongoDB Compass (GUI client)
• Mongo shell / MongoDB Atlas playground

## Small Practice Tasks I Did
• Inserted multiple users
• Filtered by age and name
• Updated a single field using `$set`
• Deleted specific documents
• Viewed collections in Compass

## What I Built Today
• A sample users collection
• Simple CRUD actions in MongoDB
• Understood how NoSQL data structures work

## Challenges I Faced
• Remembering MongoDB query syntax
• Understanding update operators like `$set`
• Switching mindset from tables → documents

## Tomorrow's Plan (Day 75)
• Learn Mongoose (ODM)
• Connect Node.js to MongoDB
• Build CRUD API with actual database instead of array
• Understand schemas and models