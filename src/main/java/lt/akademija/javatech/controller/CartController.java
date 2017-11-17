package lt.akademija.javatech.controller;

import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

import lt.akademija.javatech.model.CartProduct;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CartController {

    private final Map<String, Set<CartProduct>> productsByUsername;

    public CartController() {
        this.productsByUsername = new ConcurrentHashMap<>();
    }

    @GetMapping("/api/users/{username}/cart-products")
    public List<CartProduct> getCartProducts(@PathVariable String username) {
        return new ArrayList<>(productsByUsername.getOrDefault(username, new LinkedHashSet<>()));
    }

    @PostMapping("/api/users/{username}/cart-products")
    public List<CartProduct> addCartProduct(@PathVariable String username, @RequestBody CartProduct cartProduct) {
        Set<CartProduct> existingCartProducts = productsByUsername.getOrDefault(username, new LinkedHashSet<>());
        existingCartProducts.add(cartProduct);
        productsByUsername.put(username, existingCartProducts);
        return getCartProducts(username);
    }

    @DeleteMapping("/api/users/{username}/cart-products/{productId}")
    public List<CartProduct> removeFromCart(@PathVariable String username, @PathVariable Long productId) {
        Set<CartProduct> existingCartProducts = productsByUsername.getOrDefault(username, new LinkedHashSet<>());
        existingCartProducts = existingCartProducts
                .stream()
                .filter(c -> !c.id.equals(productId))
                .collect(Collectors.toSet());
        productsByUsername.put(username, existingCartProducts);
        return getCartProducts(username);
    }
}
