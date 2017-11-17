package lt.akademija.javatech.controller;

import java.util.List;

import lt.akademija.javatech.model.NewProduct;
import lt.akademija.javatech.model.Product;
import lt.akademija.javatech.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {

    @Autowired
    private ProductRepository repository;

    @GetMapping("/api/products")
    public List<Product> getProducts() {
        return repository.getProducts();
    }

    @GetMapping("/api/products/{productId}")
    public Product getProduct(@PathVariable Long productId) {
        return repository.getProducts().stream()
                       .filter(p -> p.id.equals(productId))
                       .findFirst()
                       .orElseThrow(() -> new RuntimeException("Can't find product"));
    }

    @PostMapping("/api/products")
    public Product createProduct(@RequestBody NewProduct p) {
        return repository.addProduct(p);
    }

    @PutMapping("/api/products/{productId}")
    public Product updateProduct(@PathVariable Long productId, @RequestBody NewProduct p) {
        Product existingProduct = getProduct(productId);
        existingProduct.title = p.title;
        existingProduct.quantity = p.quantity;
        existingProduct.description = p.description;
        existingProduct.price = p.price;
        existingProduct.image = p.image;
        return existingProduct;
    }
}
