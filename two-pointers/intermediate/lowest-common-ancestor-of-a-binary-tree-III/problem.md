# Problem: Lowest Common Ancestor of a Binary Tree III

## Statement

You are given two nodes, `p` and `q`. The task is to return their **lowest common ancestor (LCA)**.  
Each node contains a reference to its **parent node**, and **the root of the tree is not provided**.  
You must determine the LCA using only the parent pointers.

---

## Definition

> The **lowest common ancestor (LCA)** of two nodes `p` and `q` is the **lowest node** in the binary tree that has **both `p` and `q` as descendants**.

A **descendant** of a node is any node reachable by following edges **downward** from that node, including the node itself.

---

## Constraints

- `-10⁴ ≤ Node.data ≤ 10⁴`
- The number of nodes in the tree is in the range **[2, 500]**
- All `Node.data` values are **unique**
- `p != q`
- Both `p` and `q` are **present in the tree**
