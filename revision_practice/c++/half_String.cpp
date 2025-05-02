#include <bits/stdc++.h>
using namespace std;

int main()
{
    string word;
    cout << "Enter Any Word: ";
    cin >> word;
    int halfLenOfWord = word.size() / 2;

    for (int i = 0; i < halfLenOfWord; i++)
    {
        cout << word[i];
    }
    return 0;
}