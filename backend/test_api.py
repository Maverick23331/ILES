import requests

# Test login endpoint
print("Testing login endpoint...")
response = requests.post('http://127.0.0.1:8000/api/token', json={
    'username': 'testuser',
    'password': 'testpass123'
})

if response.status_code == 200:
    data = response.json()
    access_token = data['access_token']
    print("✅ Login successful!")
    print(f"Access token: {access_token[:50]}...")

    # Test user endpoint
    print("\nTesting user endpoint...")
    headers = {'Authorization': f'Bearer {access_token}'}
    user_response = requests.get('http://127.0.0.1:8000/api/user', headers=headers)

    if user_response.status_code == 200:
        user_data = user_response.json()
        print("✅ User endpoint successful!")
        print(f"User: {user_data}")
    else:
        print(f"❌ User endpoint failed: {user_response.status_code}")
        print(user_response.text)
else:
    print(f"❌ Login failed: {response.status_code}")
    print(response.text)