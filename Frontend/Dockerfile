# Use official nginx image
FROM nginx:alpine

# Remove default nginx page
RUN rm -rf /usr/share/nginx/html/*

# Copy your HTML/CSS/JS files into the nginx public folder
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx (already CMD in base image, so nothing more needed)
