// src/App.jsx
import React, { useState } from "react";
import LeftDiv from "../LeftPart/LeftDiv.jsx";
import RightDiv from "../RightPart/RightDiv.jsx";
import InputForm from "../InputForm/InputForm.jsx";
import ViewSnippet from "../ViewSnippet/ViewSnippet.jsx"; // Import the ViewSnippet component

function MiddlePart({ onInputFormClick, isInputFormPage }) {
  // State for snippets
  const [snippets, setSnippets] = useState([
    {
      name: "LogIn Snippet",
      author: "Alice",
      date: "2024-10-10",
      language: "HTML",
      likes: 0,
      code: `
        <!-- HTML Code for Login Form -->
        <form action="/login" method="POST">
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" required />
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <button type="submit">Log In</button>
        </form>
      `,
    },
    {
      name: "SignUp Snippet",
      author: "Bob",
      date: "2024-09-15",
      language: "JavaScript",
      likes: 0,
      code: `
        // JavaScript Code for SignUp
        document.getElementById("signupForm").addEventListener("submit", function(event) {
          event.preventDefault();
          const username = document.getElementById("username").value;
          const password = document.getElementById("password").value;
          if (username && password) {
            console.log("Sign Up Successful");
          } else {
            console.log("Please fill in all fields");
          }
        });
      `,
    },
    {
      name: "Authentication Snippet",
      author: "Charlie",
      date: "2024-08-20",
      language: "CSS",
      likes: 0,
      code: `
        /* CSS Code for Authentication */
        form {
          max-width: 400px;
          margin: 0 auto;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 8px;
        }
        input {
          width: 100%;
          padding: 10px;
          margin-bottom: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        button {
          width: 100%;
          padding: 10px;
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 4px;
        }
      `,
    },
    {
      name: "for Loop Snippet",
      author: "Alice",
      date: "2024-07-18",
      language: "Vue",
      likes: 0,
      code: `
        <!-- Vue.js Code for for Loop -->
        <template>
          <ul>
            <li v-for="item in items" :key="item.id">{{ item.name }}</li>
          </ul>
        </template>
  
        <script>
        export default {
          data() {
            return {
              items: [
                { id: 1, name: 'Item 1' },
                { id: 2, name: 'Item 2' },
                { id: 3, name: 'Item 3' }
              ]
            };
          }
        };
        </script>
      `,
    },
    {
      name: "Linked List Snippet",
      author: "David",
      date: "2024-06-22",
      language: "Go",
      likes: 0,
      code: `
        // Go Code for Linked List
        package main
  
        import "fmt"
  
        type Node struct {
          value int
          next  *Node
        }
  
        func printList(head *Node) {
          for head != nil {
            fmt.Printf("%d -> ", head.value)
            head = head.next
          }
          fmt.Println("nil")
        }
  
        func main() {
          head := &Node{value: 1}
          second := &Node{value: 2}
          third := &Node{value: 3}
          head.next = second
          second.next = third
          printList(head)
        }
      `,
    },
    {
      name: "Print Butterfly Snippet",
      author: "Eve",
      date: "2024-05-13",
      language: "Ruby",
      likes: 0,
      code: `
        # Ruby Code for Printing Butterfly
        def print_butterfly(n)
          (1..n).each do |i|
            puts '*' * i + ' ' * (n - i) * 2 + '*' * i
          end
          n.downto(1) do |i|
            puts '*' * i + ' ' * (n - i) * 2 + '*' * i
          end
        end
  
        print_butterfly(5)
      `,
    },
    {
      name: "Tower of Hanoi Snippet",
      author: "Frank",
      date: "2024-04-25",
      language: "C++",
      likes: 0,
      code: `
        // C++ Code for Tower of Hanoi
        #include <iostream>
        using namespace std;
  
        void towerOfHanoi(int n, char from, char to, char aux) {
          if (n == 1) {
            cout << "Move disk 1 from " << from << " to " << to << endl;
            return;
          }
          towerOfHanoi(n - 1, from, aux, to);
          cout << "Move disk " << n << " from " << from << " to " << to << endl;
          towerOfHanoi(n - 1, aux, to, from);
        }
  
        int main() {
          int n = 3; // Number of disks
          towerOfHanoi(n, 'A', 'C', 'B');
          return 0;
        }
      `,
    },
    {
      name: "Caching Snippet",
      author: "Grace",
      date: "2024-03-18",
      language: "Rust",
      likes: 0,
      code: `
        // Rust Code for Caching
        use std::collections::HashMap;
  
        struct Cache {
            map: HashMap<String, String>,
        }
  
        impl Cache {
            fn new() -> Cache {
                Cache { map: HashMap::new() }
            }
  
            fn insert(&mut self, key: String, value: String) {
                self.map.insert(key, value);
            }
  
            fn get(&self, key: &str) -> Option<&String> {
                self.map.get(key)
            }
        }
  
        fn main() {
            let mut cache = Cache::new();
            cache.insert("name".to_string(), "Grace".to_string());
            if let Some(value) = cache.get("name") {
                println!("Cached value: {}", value);
            }
        }
      `,
    },
    {
      name: "Db Connect Snippet",
      author: "Henry",
      date: "2024-02-14",
      language: "Java",
      likes: 0,
      code: `
        // Java Code for Database Connection
        import java.sql.Connection;
        import java.sql.DriverManager;
        import java.sql.SQLException;
  
        public class DbConnect {
            public static void main(String[] args) {
                String url = "jdbc:mysql://localhost:3306/mydb";
                String user = "root";
                String password = "password";
  
                try {
                    Connection connection = DriverManager.getConnection(url, user, password);
                    if (connection != null) {
                        System.out.println("Connected to the database");
                    }
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
      `,
    },
    {
      name: "Cloudinary Connection Snippet",
      author: "Ivy",
      date: "2024-01-10",
      language: "Swift",
      likes: 0,
      code: `
        // Swift Code for Cloudinary Connection
        import Cloudinary
  
        let cloudinary = CLDCloudinary(configuration: CLDConfiguration(cloudName: "your_cloud_name", apiKey: "your_api_key", apiSecret: "your_api_secret"))
  
        func uploadImage(image: UIImage) {
            let data = image.jpegData(compressionQuality: 0.8)
            cloudinary.createUploader().upload(data: data!, uploadPreset: "your_preset") { result, error in
                if let error = error {
                    print("Upload error: \(error)")
                } else if let result = result {
                    print("Image URL: \(result.secureUrl!)")
                }
            }
        }
      `,
    },
  ]);
  
  const [currentUser, setCurrentUser] = useState("Alice"); // Set this dynamically based on your authentication

  const [selectedSnippetIndex, setSelectedSnippetIndex] = useState(null);
  const [sortOrder, setSortOrder] = useState("latest");

  // Handle sorting
  const sortSnippets = (order) => {
    const sortedSnippets = [...snippets].sort((a, b) => {
      return order === "latest"
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date);
    });
    setSnippets(sortedSnippets);
    setSortOrder(order);
  };

  // Handle checkbox toggle for languages
  const [languages, setLanguages] = useState([
    { name: "JavaScript", checked: false },
    { name: "Python", checked: false },
    { name: "C++", checked: false },
    { name: "Rust", checked: false },
    { name: "Go", checked: false },
  ]);

  const handleCheckboxToggle = (index) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index].checked = !updatedLanguages[index].checked;
    setLanguages(updatedLanguages);
  };

  // Handle editing a snippet
  const handleEditSnippet = (index) => {
    const snippetToEdit = snippets[index];
    const newSnippetName = prompt("Edit Snippet Name:", snippetToEdit.name);
    const newSnippetCode = prompt("Edit Snippet Code:", snippetToEdit.code);

    if (newSnippetName && newSnippetCode) {
      const updatedSnippets = [...snippets];
      updatedSnippets[index] = {
        ...snippetToEdit,
        name: newSnippetName,
        code: newSnippetCode,
      };
      setSnippets(updatedSnippets);
    }
  };

  // Handle liking a snippet
  const handleLikeSnippet = (index) => {
    setSnippets((prevSnippets) => {
      const updatedSnippets = prevSnippets.map((snippet, idx) => {
        if (idx === index) {
          return {
            ...snippet,
            likes: snippet.likes > 0 ? snippet.likes - 1 : snippet.likes + 1,
          };
        }
        return snippet;
      });
      return updatedSnippets;
    });
  };

  // Handle viewing a snippet
  const handleViewSnippet = (index) => {
    setSelectedSnippetIndex(index);
  };

  // Reset selected snippet index
  const resetSelectedSnippet = () => {
    setSelectedSnippetIndex(null);
  };

  return (
    <>
      <div className="mx-12 my-8 rounded-2xl gap-10 flex min-h-screen overflow-hidden">
        {/* Left Div with personal information */}
        <LeftDiv
          snippets={snippets}
          sortOrder={sortOrder}
          sortSnippets={sortSnippets}
          languages={languages}
          handleCheckboxToggle={handleCheckboxToggle}
          author={currentUser}
        />

        {/* Right Div with saved snippets or input form */}
        {selectedSnippetIndex !== null ? (
          <ViewSnippet
          snippet={snippets[selectedSnippetIndex]}
          onEditClick={() => handleEditSnippet(selectedSnippetIndex)}
          onBack={resetSelectedSnippet} // Custom back function
          currentUser={currentUser}
        />
        
        ) : isInputFormPage ? (
          <InputForm />
        ) : (
          <RightDiv
            snippets={snippets}
            handleViewSnippet={handleViewSnippet}
            handleEditSnippet={handleEditSnippet}
            handleLikeSnippet={handleLikeSnippet}
          />
        )}
      </div>
    </>
  );
}

export default MiddlePart;
