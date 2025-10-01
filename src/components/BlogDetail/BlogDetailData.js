import blog1 from "../../assest/blog1.jpg";
import blog2 from "../../assest/blog2.jpg";
import blog3 from "../../assest/blog3.jpg";
import blog4 from "../../assest/blog4.jpg";
import blog5 from "../../assest/blog5.jpg";
import blog6 from "../../assest/blog6.jpg";
import blog7 from "../../assest/blog7.jpg";
import blog8 from "../../assest/blog8.jpg";
import blog9 from "../../assest/blog9.jpg";
import blog10 from "../../assest/blog10.jpg";
import blog11 from "../../assest/blog11.jpg";
import blog13 from "../../assest/blog13.jpg";
import blog12 from "../../assest/blog12.jpg";
import blog14 from "../../assest/blog14.jpg";
import blog15 from "../../assest/blog15.jpg";

const blogDetailData = [
  {
    id: 1,
    imageUrl: blog1,
    date: "September 12, 2023",
    author: "Admin",
    comments: 5,
    title: "Fresh Vegetable Food",
    link: "https://example.com/blog/fresh-vegetable-food",
    leftTags:["healthy", "lunch", "ideas","family-friendly", "meals", "kids"],
    tags: ["vegetables", "healthy", "fresh"],
    commentsData: [
        {
          commenter: "UserA",
          commentDate: "September 13, 2023",
          commentText: "This is an amazing post! I love fresh vegetables.",
        },
        {
          commenter: "UserB",
          commentDate: "September 14, 2023",
          commentText: "Great insights into healthy and fresh food choices.",
        },
        {
          commenter: "UserC",
          commentDate: "September 15, 2023",
          commentText: "The provided link is very informative. Thanks for sharing!",
        },
      ],
  },
  {
    id: 2,
    imageUrl: blog2,
    date: "September 10, 2023",
    author: "Admin",
    comments: 8,
    title: "Healthy Recipes",
    link: "https://example.com/blog/healthy-recipes",
    leftTags:["healthy", "lunch", "ideas","family-friendly", "meals", "kids"],
    tags: ["recipes", "healthy", "cooking"],
    commentsData: [
        {
          commenter: "UserX",
          commentDate: "September 11, 2023",
          commentText: "I tried one of these recipes, and it turned out delicious!",
        },
        {
          commenter: "UserY",
          commentDate: "September 12, 2023",
          commentText: "The variety of recipes is impressive. Thanks for sharing.",
        },
        {
          commenter: "UserZ",
          commentDate: "September 13, 2023",
          commentText: "Looking forward to trying more recipes from your blog.",
        },
      ],
  },
  {
    id: 3,
    imageUrl: blog3,
    date: "September 8, 2023",
    author: "Admin",
    comments: 12,
    title: "Organic Farming Benefits",
    link: "https://example.com/blog/organic-farming-benefits",
    leftTags:["healthy", "lunch", "ideas","family-friendly", "meals", "kids"],
    tags: ["organic", "farming", "benefits"],
    commentsData: [
        {
          commenter: "UserM",
          commentDate: "September 9, 2023",
          commentText: "Organic farming is the way to go! Thanks for the insights.",
        },
        {
          commenter: "UserN",
          commentDate: "September 10, 2023",
          commentText: "I appreciate the effort to promote sustainable farming practices.",
        },
        {
          commenter: "UserO",
          commentDate: "September 11, 2023",
          commentText: "The link provided has valuable information on organic farming benefits.",
        },
      ],
  },
  {
    id: 4,
    imageUrl: blog4,
    date: "September 5, 2023",
    author: "Admin",
    comments: 6,
    title: "Cooking Tips for Beginners",
    link: "https://example.com/blog/cooking-tips",
    leftTags:["healthy", "lunch", "ideas","family-friendly", "meals", "kids"],
    tags: ["cooking", "tips", "beginners"],
    commentsData: [
        {
          commenter: "Felix Design",
          commentDate: "September 12, 2023",
          commentText:
            "Every outfit is carefully chosen by our designated fashion expert. Check them out!",
        },
        {
          commenter: "Alice",
          commentDate: "September 13, 2023",
          commentText: "I love the variety of vegetables featured in this post!",
        },
        {
          commenter: "Bob",
          commentDate: "September 14, 2023",
          commentText: "Great tips on maintaining freshness! Thanks for sharing.",
        },
      ],
  },
  {
    id: 5,
    imageUrl: blog5,
    date: "August 30, 2023",
    author: "Admin",
    comments: 10,
    title: "Delicious Summer Desserts",
    link: "https://example.com/blog/summer-desserts",
    leftTags:["healthy", "lunch", "ideas","family-friendly", "meals", "kids"],
    tags: ["desserts", "summer", "delicious"],
    commentsData: [
        {
          commenter: "UserP",
          commentDate: "September 6, 2023",
          commentText: "These cooking tips are so helpful for beginners like me!",
        },
        {
          commenter: "UserQ",
          commentDate: "September 7, 2023",
          commentText: "I tried one of the tips, and it made a big difference in my cooking.",
        },
        {
          commenter: "UserR",
          commentDate: "September 8, 2023",
          commentText: "Looking forward to more tips. Great work!",
        },
      ],
  },
  {
    id: 6,
    imageUrl: blog6,
    date: "August 28, 2023",
    author: "Admin",
    comments: 7,
    title: "The Art of Plating",
    link: "https://example.com/blog/art-of-plating",
    leftTags:["healthy", "lunch", "ideas","family-friendly", "meals", "kids"],
    tags: ["art", "plating", "culinary"],
    commentsData: [
        {
          commenter: "Felix Design",
          commentDate: "September 12, 2023",
          commentText:
            "Every outfit is carefully chosen by our designated fashion expert. Check them out!",
        },
        {
          commenter: "Alice",
          commentDate: "September 13, 2023",
          commentText: "I love the variety of vegetables featured in this post!",
        },
        {
          commenter: "Bob",
          commentDate: "September 14, 2023",
          commentText: "Great tips on maintaining freshness! Thanks for sharing.",
        },
      ],
  },
  {
    id: 7,
    imageUrl: blog7,
    date: "August 25, 2023",
    author: "Admin",
    comments: 9,
    title: "Farm-to-Table Movement",
    link: "https://example.com/blog/farm-to-table",
    leftTags:["healthy", "lunch", "ideas","family-friendly", "meals", "kids"],
    tags: ["farm-to-table", "movement", "sustainability"],
    commentsData: [
        {
          commenter: "UserS",
          commentDate: "August 31, 2023",
          commentText: "These summer desserts look too good to resist!",
        },
        {
          commenter: "UserT",
          commentDate: "September 1, 2023",
          commentText: "I'm definitely trying one of these desserts this weekend.",
        },
        {
          commenter: "UserU",
          commentDate: "September 2, 2023",
          commentText: "Thanks for sharing these delightful recipes.",
        },
      ],
  },
  {
    id: 8,
    imageUrl: blog8,
    date: "August 20, 2023",
    author: "Admin",
    comments: 4,
    title: "Seasonal Cooking Tips",
    link: "https://example.com/blog/seasonal-cooking-tips",
    leftTags:["healthy", "lunch", "ideas","family-friendly", "meals", "kids"],
    tags: ["seasonal", "cooking", "tips"],
    commentsData: [
        {
          commenter: "Felix Design",
          commentDate: "September 12, 2023",
          commentText:
            "Every outfit is carefully chosen by our designated fashion expert. Check them out!",
        },
        {
          commenter: "Alice",
          commentDate: "September 13, 2023",
          commentText: "I love the variety of vegetables featured in this post!",
        },
        {
          commenter: "Bob",
          commentDate: "September 14, 2023",
          commentText: "Great tips on maintaining freshness! Thanks for sharing.",
        },
      ],
  },
  {
    id: 9,
    imageUrl: blog9,
    date: "August 18, 2023",
    author: "Admin",
    comments: 11,
    title: "Gardening Essentials",
    link: "https://example.com/blog/gardening-essentials",
    leftTags:["healthy", "lunch", "ideas","family-friendly", "meals", "kids"],
    tags: ["gardening", "essentials", "plants"],
    commentsData: [
        {
          commenter: "UserV",
          commentDate: "August 29, 2023",
          commentText: "The art of plating truly elevates the dining experience.",
        },
        {
          commenter: "UserW",
          commentDate: "August 30, 2023",
          commentText: "I learned so much about presentation from this post. Thank you!",
        },
        {
          commenter: "UserX",
          commentDate: "August 31, 2023",
          commentText: "Excited to apply these plating techniques in my cooking.",
        },
      ],
  },
  {
    id: 10,
    imageUrl: blog10,
    date: "August 15, 2023",
    author: "Admin",
    comments: 6,
    title: "Tips for Preserving Fresh Produce",
    link: "https://example.com/blog/preserving-fresh-produce",
    leftTags:["healthy", "lunch", "ideas","family-friendly", "meals", "kids"],
    tags: ["preserving", "fresh", "produce"],
    commentsData: [
        {
          commenter: "Felix Design",
          commentDate: "September 12, 2023",
          commentText:
            "Every outfit is carefully chosen by our designated fashion expert. Check them out!",
        },
        {
          commenter: "Alice",
          commentDate: "September 13, 2023",
          commentText: "I love the variety of vegetables featured in this post!",
        },
        {
          commenter: "Bob",
          commentDate: "September 14, 2023",
          commentText: "Great tips on maintaining freshness! Thanks for sharing.",
        },
      ],
  },
  {
    id: 11,
    imageUrl: blog11,
    date: "August 12, 2023",
    author: "Admin",
    comments: 8,
    title: "Homemade Snack Ideas",
    link: "https://example.com/blog/homemade-snack-ideas",
    leftTags:["healthy", "lunch", "ideas","family-friendly", "meals", "kids"],
    tags: ["homemade", "snack", "ideas"],
    commentsData: [
        {
          commenter: "UserY",
          commentDate: "August 26, 2023",
          commentText: "Supporting the farm-to-table movement is essential for a sustainable future.",
        },
        {
          commenter: "UserZ",
          commentDate: "August 27, 2023",
          commentText: "I appreciate the focus on sustainability in this post. Well done!",
        },
        {
          commenter: "UserAA",
          commentDate: "August 28, 2023",
          commentText: "The provided link has valuable information on sustainable food practices.",
        },
      ],
  },
  {
    id: 12,
    imageUrl: blog12,
    date: "August 10, 2023",
    author: "Admin",
    comments: 7,
    title: "Exploring Culinary Herbs",
    link: "https://example.com/blog/culinary-herbs",
    leftTags:["healthy", "lunch", "ideas","family-friendly", "meals", "kids"],
    tags: ["culinary", "herbs", "exploration"],
    commentsData: [
        {
          commenter: "UserAB",
          commentDate: "August 21, 2023",
          commentText: "These seasonal cooking tips are exactly what I needed. Thanks!",
        },
        {
          commenter: "UserAC",
          commentDate: "August 22, 2023",
          commentText: "The link provided has helpful additional tips. Much appreciated!",
        },
        {
          commenter: "UserAD",
          commentDate: "August 23, 2023",
          commentText: "Looking forward to trying these tips in my kitchen.",
        },
      ],
  },
  {
    id: 13,
    imageUrl: blog13,
    date: "August 8, 2023",
    author: "Admin",
    comments: 9,
    title: "Weekend Cooking Adventures",
    link: "https://example.com/blog/cooking-adventures",
    leftTags:["healthy", "lunch", "ideas","family-friendly", "meals", "kids"],
    tags: ["weekend", "cooking", "adventures"],
    commentsData: [
        {
          commenter: "UserAE",
          commentDate: "August 19, 2023",
          commentText: "Learning about gardening essentials is crucial for successful planting.",
        },
        {
          commenter: "UserAF",
          commentDate: "August 20, 2023",
          commentText: "The tips on plant care are very informative. Thank you!",
        },
        {
          commenter: "UserAG",
          commentDate: "August 21, 2023",
          commentText: "I've been looking for reliable gardening advice. This post delivered!",
        },
      ],
  },
  {
    id: 14,
    imageUrl: blog14,
    date: "August 5, 2023",
    author: "Admin",
    comments: 5,
    title: "Family-Friendly Meals",
    link: "https://example.com/blog/family-friendly-meals",
    leftTags:["healthy", "lunch", "ideas","family-friendly", "meals", "kids"],
    tags: ["family-friendly", "meals", "kids"],
    commentsData: [
        {
          commenter: "UserAH",
          commentDate: "August 16, 2023",
          commentText: "Preserving fresh produce is a game-changer. Thanks for the tips!",
        },
        {
          commenter: "UserAI",
          commentDate: "August 17, 2023",
          commentText: "I tried one of the methods, and it worked wonders! Great advice.",
        },
        {
          commenter: "UserAJ",
          commentDate: "August 18, 2023",
          commentText: "The link provided has additional insights. Much appreciated!",
        },
      ],
  },
  {
    id: 15,
    imageUrl: blog15,
    date: "August 2, 2023",
    author: "Admin",
    comments: 10,
    title: "Healthy Lunch Ideas",
    link: "https://example.com/blog/healthy-lunch-ideas",
    leftTags:["healthy", "lunch", "ideas","family-friendly", "meals", "kids"],
    tags: ["healthy", "lunch", "ideas",],
    commentsData: [
        {
          commenter: "UserAK",
          commentDate: "August 13, 2023",
          commentText: "These homemade snack ideas are fantastic! My family loved them.",
        },
        {
          commenter: "UserAL",
          commentDate: "August 14, 2023",
          commentText: "I appreciate the creativity in these snack ideas. Well done!",
        },
        {
          commenter: "UserAM",
          commentDate: "August 15, 2023",
          commentText: "Looking forward to trying more recipes from your blog.",
        },
      ],
  }
];

export default blogDetailData;
