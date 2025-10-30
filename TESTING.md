# Testing Documentation for lightgraph

This document describes the test suites for both the JavaScript and Python components of lightgraph.

## Python Tests

### Location
- Tests are located in `python/tests/`
- Main test file: `python/tests/test_network.py`

### Running Python Tests

1. Install the package with test dependencies:
```bash
cd python
pip install -e ".[test]"
```

2. Run all tests:
```bash
pytest tests/
```

3. Run tests with verbose output:
```bash
pytest tests/ -v
```

4. Run tests with coverage:
```bash
pytest tests/ --cov=lightgraph --cov-report=html
```

### Test Coverage

The Python test suite includes 15 test cases covering:
- Basic network visualization with valid inputs
- Node groups functionality
- Removal of unconnected nodes
- Weighted edges
- File saving functionality
- Error handling for invalid inputs
- Edge cases (single node, empty edges, large networks)
- HTML output structure validation
- JSON data validity

## JavaScript Tests

### Location
- Tests are located in `tests/`
- Main test file: `tests/lightgraph.test.js`

### Running JavaScript Tests

1. Install dependencies:
```bash
npm install
```

2. Run all tests:
```bash
npm test
```

3. Run tests with coverage:
```bash
npm run test:coverage
```

### Test Coverage

The JavaScript test suite includes 25 test cases covering:
- Library initialization and namespace management
- DOM element creation and validation
- Data parsing (nodes and edges)
- Node groups and weighted edges
- Edge cases (single node, large networks, self-loops, directed graphs)
- Data format validation
- Integration with D3.js library
- Global namespace pollution prevention

## Continuous Integration

Both test suites can be integrated into CI/CD pipelines:

### Python CI Example
```yaml
- name: Run Python tests
  run: |
    cd python
    pip install -e ".[test]"
    pytest tests/ -v
```

### JavaScript CI Example
```yaml
- name: Run JavaScript tests
  run: |
    npm install
    npm test
```

## Test Requirements

### Python
- pytest >= 7.0
- pytest-cov >= 4.0 (for coverage)
- numpy (production dependency)
- IPython (production dependency)

### JavaScript
- jest >= 29.7.0
- jest-environment-jsdom >= 29.7.0
- Node.js >= 14.x

## Writing New Tests

### Python Tests
Follow the existing test structure in `test_network.py`:
```python
def test_your_feature(self):
    """Test description."""
    # Arrange
    adj_matrix = np.array([[0, 1], [1, 0]])
    node_names = np.array(['A', 'B'])
    
    # Act
    result = net_vis(adj_matrix, node_names)
    
    # Assert
    assert 'expected_content' in result
```

### JavaScript Tests
Follow the existing test structure in `lightgraph.test.js`:
```javascript
test('should do something', () => {
  // Arrange
  document.body.innerHTML = `...`;
  
  // Act
  eval(lightgraphCode);
  
  // Assert
  expect(result).toBeDefined();
});
```

## Troubleshooting

### Python Tests
- **Import errors**: Make sure you've installed the package with `pip install -e ".[test]"`
- **Module not found**: Ensure you're running tests from the `python/` directory

### JavaScript Tests
- **Canvas errors**: The tests use jsdom which has limited canvas support. Canvas operations are mocked.
- **D3 errors**: D3.js functions are mocked in the test setup. If you see d3-related errors, check the mock configuration in `beforeEach()`.

## Test Maintenance

- Update tests when adding new features
- Ensure backward compatibility when modifying existing functionality
- Run tests before committing changes
- Keep test coverage above 80%
