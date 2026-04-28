import os
import re

def count_words_in_tsx(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove imports, metadata, and other non-JSX code
    # This is a rough approximation focusing on text inside tags or quotes in JSX
    
    # Remove imports
    content = re.sub(r'import.*?;', '', content, flags=re.DOTALL)
    # Remove metadata export
    content = re.sub(r'export const metadata.*?;', '', content, flags=re.DOTALL)
    
    # Extract text from JSX (text between > and <)
    jsx_text = re.findall(r'>([^<]+)<', content)
    
    # Extract text from curly braces if it's a string literal
    curly_text = re.findall(r'\{"([^"]+)"\}', content)
    
    # Extract text from standard strings in attributes if likely to be content (e.g. alt tags)
    alt_text = re.findall(r'alt="([^"]+)"', content)
    
    combined_text = " ".join(jsx_text + curly_text + alt_text)
    
    # Clean up whitespace and special characters
    combined_text = re.sub(r'\s+', ' ', combined_text).strip()
    
    words = combined_text.split()
    return len(words)

pages = [
    "src/app/page.tsx",
    "src/app/about/page.tsx",
    "src/app/privacy/page.tsx",
    "src/app/terms/page.tsx",
    "src/app/services/gunite-engineering/page.tsx",
    "src/app/services/fiberglass-performance/page.tsx",
    "src/app/services/historic-restoration/page.tsx",
    "src/app/suburbs/jenks-luxury/page.tsx",
    "src/app/suburbs/bixby-estates/page.tsx",
    "src/app/suburbs/midtown-historic/page.tsx",
    "src/app/suburbs/broken-arrow-limestone/page.tsx",
    "src/app/resources/tulsa-soil-geology/page.tsx",
    "src/app/resources/permit-sovereignty/page.tsx"
]

print("| Page | Word Count |")
print("| :--- | :--- |")
for page in pages:
    path = os.path.join("c:\\Users\\user\\poolbuilderttulsa", page)
    if os.path.exists(path):
        count = count_words_in_tsx(path)
        print(f"| {page} | {count} |")
    else:
        print(f"| {page} | NOT FOUND |")
