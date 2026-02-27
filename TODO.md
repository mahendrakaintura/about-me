# Plan: Add Practical Labs as dropdown under Networking tab

## Information Gathered:
- Current navbar has 4 tabs: システム, ネットワーキング, 実践演習 (with dropdown), サイバーセキュリティ
- The Practical Labs (実践演習) already exists as a separate tab with its own content
- projects-script.js already has the data and functionality for practical-labs category

## Plan:
1. **projects.html**: 
   - Convert "ネットワーキング" (Networking) button to a dropdown container
   - Add "実践演習" (Practical Labs) as a dropdown item under Networking
   - Remove the standalone "実践演習" button

2. **projects-script.js**: 
   - No major changes needed - already handles practical-labs category
   - Ensure dropdown toggle works for networking

3. **style.css**: 
   - Added flex and min-width for dropdown-container in mobile responsive
   - Added similar styling for both regular buttons and dropdown buttons in mobile view

## Implementation Steps:
1. ✅ Edit projects.html to convert networking to dropdown
2. ✅ Update style.css for mobile responsive - added flex and min-width for dropdown-container
3. ✅ Test the implementation

## Status: COMPLETED

