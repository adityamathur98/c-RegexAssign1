#include <bits/stdc++.h>
using namespace std;

int main()
{
    // string word;
    // cout << "Enter Any Word: ";
    // cin >> word;

    int a, b;
    cout << "Enter a and b: ";
    cin >> a >> b;

    // for (int i = 0; i < n; i++)
    // {
    //     for (int j = word.size() - n - 1; j < word.size(); j++)
    //     {
    //         cout << word[j];
    //     }
    // }

    // for (int i = 0; i < 2; i++)
    // {
    //     cout << word[i];
    // }

    // int numOfStar = word.size() - 4;

    // for (int i = 0; i < numOfStar; i++)
    // {
    //     cout << "*";
    // }

    // int lastTwoIndex = word.size() - 2;

    // for (int i = lastTwoIndex; i < word.size(); i++)
    // {
    //     cout << word[i];
    // }

    cout << a + b << endl
         << a - b << endl
         << a * b;

    return 0;
}