#include <bits/stdc++.h>
using namespace std;

bool checkPassword(string pass)
{
    int lenOfPass = pass.size();

    return lenOfPass > 7 ? true : false;
}

int main()
{
    // int n1, n2;
    // cout << "Enter Two Number: ";
    // cin >> n1 >> n2;

    // if (n1 > n2)
    // {
    //     cout << "Number 1 > Number 2 is true";
    // }
    // else
    // {
    //     cout << "Number 1 > Number 2 is false";
    // }

    // if (n1 > 0)
    // {
    //     cout << n1 << " is positive";
    // }
    // else
    // {
    //     cout << n1 << " is Negative";
    // }
    // string w1, w2;
    // cout << "Enter two words : ";
    // cin >> w1 >> w2;
    // if (w1 == w2)
    // {
    //     cout << true;
    // }
    // else
    // {
    //     cout << false;
    // }

    // string w1;
    // cout << "Enter words : ";
    // cin >> w1;

    // bool isLastFirtChSame = w1[0] != w1[w1.length() - 1];

    // cout << isLastFirtChSame;

    // string password;
    // cout << "Enter Password: ";
    // cin >> password;

    // bool isValidPasswrod = checkPassword(password);

    // if (isValidPasswrod)
    // {
    //     cout << true;
    // }
    // else
    // {
    //     cout << false;
    // }
    // string w1, w2;
    // cout << "Enter two words : ";
    // cin >> w1 >> w2;

    // int lenOfW = w1.size() - w2.size();
    // bool isSame = true;
    // int j = 0;

    // for (int i = lenOfW; i < w1.length(); i++)
    // {
    //     if (w1[i] == w2[j])
    //     {
    //         j++;
    //         continue;
    //     }
    //     else
    //     {
    //         isSame = false;
    //         break;
    //     }
    // }

    // if (isSame)
    // {
    //     cout << "True";
    // }
    // else
    // {
    //     cout << "False";
    // }

    string w1, w2;
    cout << "Enter two words : ";
    cin >> w1 >> w2;

    // int index;
    // cout << "Enter Index: ";
    // cin >> index;

    // int endIndex = w2.size() + index;
    // cout << endIndex << endl;
    bool isSame = true;
    for (int i = 0; i < 3; i++)
    {
        if (w1[i] == w2[i])
        {
            continue;
        }
        else
        {
            isSame = false;
            break;
        }
    }

    cout << isSame;
}