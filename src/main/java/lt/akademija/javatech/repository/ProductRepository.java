package lt.akademija.javatech.repository;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import lt.akademija.javatech.model.NewProduct;
import lt.akademija.javatech.model.Product;
import org.springframework.stereotype.Repository;

@Repository
public class ProductRepository {

    private final List<Product> products;
    private final AtomicLong idGenerator = new AtomicLong(0);

    public ProductRepository() {
        products = Collections.synchronizedList(new ArrayList<>());

        Product p1 = new Product();
        p1.id = idGenerator.incrementAndGet();
        p1.title = "Samsung Phone 1";
        p1.image = "/samsung.jpg";
        p1.description = "Desc";
        p1.price = new BigDecimal("20.6");
        p1.quantity = 48L;
        products.add(p1);

        Product p2 = new Product();
        p2.id = idGenerator.incrementAndGet();
        p2.title = "Samsung Phone 2";
        p2.image = "/samsung.jpg";
        p2.description = "Desc";
        p2.price = new BigDecimal("14.6");
        p2.quantity = 25L;
        products.add(p2);

        p2 = new Product();
        p2.id = idGenerator.incrementAndGet();
        p2.title = "Samsung Phone 3";
        p2.image = "/samsung.jpg";
        p2.description = "Desc";
        p2.price = new BigDecimal("14.6");
        p2.quantity = 25L;
        products.add(p2);

        p2 = new Product();
        p2.id = idGenerator.incrementAndGet();
        p2.title = "Samsung Phone 4";
        p2.image = "/samsung.jpg";
        p2.description = "Desc";
        p2.price = new BigDecimal("14.6");
        p2.quantity = 25L;
        products.add(p2);

        p2 = new Product();
        p2.id = idGenerator.incrementAndGet();
        p2.title = "Samsung Phone 5";
        p2.image = "/samsung.jpg";
        p2.description = "Desc";
        p2.price = new BigDecimal("14.6");
        p2.quantity = 25L;
        products.add(p2);

        p2 = new Product();
        p2.id = idGenerator.incrementAndGet();
        p2.title = "Samsung Phone 6";
        p2.image = "/samsung.jpg";
        p2.description = "Desc";
        p2.price = new BigDecimal("14.6");
        p2.quantity = 25L;
        products.add(p2);
    }

    public Product addProduct(NewProduct p) {
        Product pr = new Product();
        pr.id = idGenerator.incrementAndGet();
        pr.price = p.price;
        pr.image = p.image;
        pr.title = p.title;
        pr.description = p.description;
        pr.quantity = p.quantity;
        products.add(pr);
        return pr;
    }

    public List<Product> getProducts() {
        return products;
    }
}
