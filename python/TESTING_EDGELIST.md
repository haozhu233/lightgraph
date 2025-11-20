# Testing Guide for Edge List Implementation

## Quick Start

### Prerequisites
Ensure you have Python with these packages installed:
```bash
pip install numpy pytest
```

Optional (for full features):
```bash
pip install pandas networkx
```

---

## Testing Options

### 🚀 Option 1: Quick Manual Test (Recommended First)

**Easiest way to verify everything works:**

```bash
cd python/tests
python quick_test.py
```

This will run 9 quick tests and show you:
- ✓ What's working
- ✗ What's broken
- ⚠ What's skipped

**Expected output:**
```
✓ Successfully imported lightgraph
✓ PASSED: Basic edge list works
✓ PASSED: Weighted edges work
✓ PASSED: Dictionary format works
...
```

---

### 🧪 Option 2: Full Test Suite (Comprehensive)

**Run all 33 edge list tests:**

```bash
cd python
pytest tests/test_edgelist.py -v
```

**Expected output:**
```
test_edgelist.py::TestEdgeListInterface::test_tuple_list_basic PASSED
test_edgelist.py::TestEdgeListInterface::test_tuple_list_with_weights PASSED
...
================================ 33 passed in 2.5s ================================
```

**Run all tests (including original net_vis tests):**

```bash
cd python
pytest tests/ -v
```

---

### 🎨 Option 3: Visual Examples (Most Fun!)

**Generate 9 example visualizations:**

```bash
cd python/examples
python edgelist_demo.py
```

**This creates:**
- `example1_simple.html` - Basic network
- `example2_weighted.html` - With edge weights
- `example3_dict.html` - Dictionary format
- `example4_groups.html` - Node communities
- `example5_isolated.html` - With isolated nodes
- `example6_no_isolated.html` - Isolated nodes removed
- `example7_social.html` - Social network
- `example8_directed.html` - Directed graph
- `example9_large.html` - Large network (100 nodes)

**Open any HTML file in your browser to see the interactive visualization!**

---

### 📊 Option 4: Compare Matrix vs Edge List

**See the difference between the two interfaces:**

```bash
cd python/examples
python comparison_matrix_vs_edgelist.py
```

**This creates:**
- `comparison_matrix.html` - Using adjacency matrix
- `comparison_edgelist.html` - Using edge list
- `comparison_social.html` - Social network example

**Opens your eyes to why edge lists are great!**

---

## Test Coverage Summary

| Test Category | Tests | What It Covers |
|--------------|-------|----------------|
| **Basic Functionality** | 5 | Tuples, weights, dicts, basic operations |
| **Input Formats** | 6 | Various edge list formats |
| **Node Handling** | 4 | Auto-extraction, isolated nodes, custom lists |
| **Error Handling** | 5 | Invalid inputs, empty lists, type errors |
| **Edge Cases** | 4 | Self-loops, large networks, mixed types |
| **Integration** | 4 | Benchmark data, pandas, NetworkX |
| **Validation** | 5 | HTML structure, JSON validity, consistency |
| **TOTAL** | **33** | **Comprehensive coverage** |

---

## Quick Commands Reference

```bash
# Quick test
python tests/quick_test.py

# Full test suite
pytest tests/test_edgelist.py -v

# Visual demos
python examples/edgelist_demo.py

# Comparison
python examples/comparison_matrix_vs_edgelist.py

# All tests
pytest tests/ -v
```

---

**Happy Testing! 🎉**
