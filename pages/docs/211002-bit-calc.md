---
title: 비트 연산
tags: 알고리즘
---



# 비트 연산

### 비트 연산자

- `&` : 비트단위로 AND 연산
- `|` : 비트 단위로 OR 연산
- `^` : 비트 단위로 XOR 연산 (같으면 0 다르면 1)
- `~` : 단항 연산자, 피연산자의 모든 비트를 반전

- `<<` : 피연산자의 비트 열을 왼쪽으로 이동
- `>>` : 피연산자의 비트 열을 오른쪽으로 이동

#### 사례

- `1<<n`

  - $2^n$의 값을 가짐
  - 원소가 n개일 경우의 모든 부분집합의 수를 의미
  - Power set (모든 부분 집합)
    - 공집합과 자기 자신을 포함한 모든 부분집합
    - 각 원소가 포함되거나 포함되지 않는 두 가지 경우의 수를 계산해, 모든 부분집합의 수를 계산

- `i & (1<<j)`

  - 계산 결과는 `i`의 `j`번째 비트가 1인지 아닌지를 의미

    ```python
    def Bbit_print(i):
        output = ''
        for j in range(7, -1, -1):
            output += '1' if i & (1<<j) else '0'
        print(output)
    ```

    

### 엔디안 - Endianness

- 컴퓨터의 메모리와 같은 1차원 공간에 여러 개의 연속된 대상을 배열하는 방법
- 빅 엔디안 : 보통 큰 단위가 앞에 나옴
- 리틀 엔디안 : 작은 단위가 앞에 나옴, 대다수 데스크탑 컴퓨터