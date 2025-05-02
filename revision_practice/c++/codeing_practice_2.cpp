#include <bits/stdc++.h>
using namespace std;

int main()
{
    // int n;
    // cout << "Enter Number: ";
    // cin >> n;
    // float x = n * 0.3;
    // float y = n - x;
    // cout << y;

    // float area = n * n;
    // float perimeter = 4 * n;
    // cout << "Area of Square is " << area << " and Perimeter of square is " << perimeter;
    // return 0;

    // string w1, w2;
    // cout << "Enter Word1 and Word2: ";
    // cin >> w1 >> w2;

    // int totalLen = w1.size() + w2.size();

    // int w2_Length = w2.length();

    // for (int i = 0; i < w2_Length; i++)
    // {
    //     cout << "*";
    // }

    // for (int i = w2_Length; i < totalLen; i++)
    // {
    //     cout << w1[i];
    // }

    string w1;
    cout << "Enter Word1: ";
    cin >> w1;

    // int i;
    // cout << "Enter Index: ";
    // cin >> i;

    // char c;
    // cout << "Enter Letter: ";
    // cin >> c;

    // w1[i] = c;

    // cout << w1;

    for (int i = w1.size() / 2; i < w1.size(); i++)
    {
        cout << w1[i];
    }
}